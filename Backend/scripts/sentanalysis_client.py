# importing the requests library 
import requests
import nltk 
from itertools import groupby

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

print(res)
review_data  = res.json()


#Getting the sentiment for each review 
#For now it just prints the positive,negative ,neutral sentiments of review
for item in review_data:
	print("review",item['review'])
	print(item['hotel_name']," review by ", item['customer_name'])
	print(getSentiment(item['review']))
	print()
