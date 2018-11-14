# importing the requests library 

import sys
sys.path.append('/usr/local/lib/python2.7/dist-packages')

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
hotel_sentcount = defaultdict(dict)


#Getting the sentiment for each review 
for item in review_data:
	score = getSentiment(item['review'])
	hotel_sentlist[item['hotel_name']].append(score)

for hotel in hotel_sentlist.keys():

	hotel_sentcount[hotel] = Counter(hotel_sentlist[hotel])

#print(hotel_sentcount)



cur_dir = os.path.dirname(os.path.realpath('sentanalysis_client.py'))
#print(cur_dir)

target_dir = os.path.join(cur_dir, '../assets/')
target_dir = os.path.abspath(os.path.realpath(target_dir))
os.chdir(target_dir)


#Aggregating sentiment score for a hotel and creating a file for each hotel with respective score
for hotel in hotel_sentcount.keys():

	
	#Changing the current working directory to respective hotel folder in assets
	target_dir = os.path.join(cur_dir, '../assets/'+str(hotel)+'/')
	target_dir = os.path.abspath(os.path.realpath(target_dir))
	os.chdir(target_dir)

	fname = str(hotel) + "_sentiment.txt"
	file  = open(fname,'a')
	
	for sent in hotel_sentcount[hotel]:
		s = str(sent) + " " + str(hotel_sentcount[hotel][sent])
		file.write(s)
		file.write('\n')

	
	
