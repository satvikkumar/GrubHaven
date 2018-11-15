import numpy as np
import matplotlib.pyplot as plt
import requests
import nltk 
import os
from itertools import groupby
from collections import defaultdict,Counter
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


# api-endpoint 
URL = "http://18.136.208.244:8080/api/viewReview"

analyser = SentimentIntensityAnalyzer()

def _sent_scores(sentence):
    snt = analyser.polarity_scores(sentence)
    return snt
    
def getSentiment(review):
	sentences = nltk.sent_tokenize(review)

	for sent in sentences:
		score = _sent_scores(sent)
		pos=0
		neg=0
		neut=0
		pos += score['pos']
		neg += score['neg']
		neut += score['neu']
	length = len(sentences)
	pos = 10*pos/length
	neg = 10*neg/length
	neut = 10*neut/length

	if pos > neg and pos > neut:
		sentiment = "positive"
	elif neg > pos and neg > neut:
		sentiment = "negative"
	else:
		sentiment = "neutral"
	
	return sentiment	


res = requests.post(url = URL ,data = {"city":"Bangalore"})
#print(res)
review_data  = res.json()

hotel_sentlist = defaultdict(list)
hotel_sentcount = defaultdict(list)

#Getting the sentiment for each review 
for item in review_data:
	score = getSentiment(item['review'])
	hotel_sentlist[item['hotel_name']].append(score)

cur_dir = os.path.dirname(os.path.realpath('sentanalysis_client.py'))

#Aggregating sentiment score for a hotel and creating a file for each hotel with respective score
for hotel in hotel_sentlist.keys():

	
	#Changing the current working directory to respective hotel folder in assets
	target_dir = os.path.join(cur_dir, '../assets/'+str(hotel)+'/')
	target_dir = os.path.abspath(os.path.realpath(target_dir))
	os.chdir(target_dir)
	
	
	hotel_sentcount[hotel] = Counter(hotel_sentlist[hotel])
	
	sent_labels = []
	sent_value = []

	for sent in hotel_sentcount[hotel]:
		sent_labels.append(sent)
		sent_value.append(hotel_sentcount[hotel][sent])

	#print(sent_labels)
	#print(sent_value)

	colors = ['green', 'grey', 'red']
	patches, texts = plt.pie(sent_value, colors=colors, shadow=True, startangle=90)
	plt.legend(patches, sent_labels, loc="best")
	plt.axis('equal')
	plt.tight_layout()
	plt.title('Sentiment visualization')
	fname = str(hotel) + "_sentimentvisualization.png"

	plt.savefig(fname)
