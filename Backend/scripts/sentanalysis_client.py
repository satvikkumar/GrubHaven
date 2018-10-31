# importing the requests library 
import requests
import nltk 

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

# api-endpoint 
URL = "http://18.136.208.244:8080/api/viewReviewByRestaurant"

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

	sentiment = {'positive' : pos, 'negative' :neg, 'neutral':neut}
	return sentiment

hotel_names = ["7Star","AKF","BBA"]
hotel_data = []

#Retrieve data from database of manager side
for hotel in hotel_names:
	r = requests.post(url = URL,data={'name':hotel}) 
	data = r.json()
	hotel_data.append(data)

print(hotel_data)


#Getting the sentiment for each review 
#For now it just prints the positive,negative ,neutral sentiments of review
for data in hotel_data:
	for item in data:
		print(item['hotel_name']," review by ", item['customer_name'])


		print(getSentiment(item['review']))
		#print(item['customer_name'])
