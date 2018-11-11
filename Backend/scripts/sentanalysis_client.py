# importing the requests library 
import requests
import nltk 
import os
from itertools import groupby
from collections import defaultdict



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
	length = len(sentences)
	pos = 10*pos/length
	neg = - 10*neg/length

	return pos if pos > neg else neg

res = requests.post(url = URL ,data = {"city":"Bangalore"})
#print(res)
review_data  = res.json()


hotel_sentscore = defaultdict(list)


#Getting the sentiment for each review 
for item in review_data:
	score = getSentiment(item['review'])
	hotel_sentscore[item['hotel_name']].append(score)


cur_dir = os.path.dirname(os.path.realpath('sentanalysis_client.py'))
print(cur_dir)

target_dir = os.path.join(cur_dir, '../assets/')
target_dir = os.path.abspath(os.path.realpath(target_dir))
os.chdir(target_dir)

#Aggregating sentiment score for a hotel and creating a file for each hotel with respective score
for hotel in hotel_sentscore.keys():
	avg_score = sum(hotel_sentscore[hotel])/(len(hotel_sentscore[hotel]))
	
	fname = str(hotel) + "_sentiment.txt"
	file  = open(fname,'a')
	file.write(str(avg_score))
	