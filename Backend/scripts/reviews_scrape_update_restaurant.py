import requests
from pprint import pprint
import sys
import json
import pymongo
from random import randint

non_bmp_map = dict.fromkeys(range(0x15000, sys.maxunicode + 1), 0xfffd)
restaurantIDMap = {"TheBlackPerl":"18387426","Truffles":"51040","shantiSagar": "60124","django": "18715942","delhiHighway":"18353127","lavonne":"53579","tacoBell": "18480024","sriUdupiPark": "18011656","snacksJoint": "18641826"}
'''
reveiwFromRestID = "https://api.zomato.com/v1/reviews.json/18387426/user?count=10&apikey=61694d8a5fe01a6695eb0ef7f8957e27"
header = {"User-agent": "curl/7.43.0", "Accept": "application/json"}
response = requests.get(reveiwFromRestID, headers=header).json()
with open('data.json', 'a') as outfile:
    json.dump(response, outfile)
'''
myclient = pymongo.MongoClient("mongodb://18.136.208.244:27017/")
mydb = myclient["drms"]
mydbreview = mydb["reviews"]
mydbrest = mydb["restaurant"]

#Review Update
for rname,rid in restaurantIDMap.items(): 
    reveiwFromRestID = "https://api.zomato.com/v1/reviews.json/"+rid+"/user?count=50&apikey=61694d8a5fe01a6695eb0ef7f8957e27"
    header = {"User-agent": "curl/7.43.0", "Accept": "application/json"}	
    response = requests.get(reveiwFromRestID, headers=header).json()
    with open('reviewData.json', 'a') as outfile:
        json.dump(response, outfile)
    userRevDict = response["userReviews"]
    for reviews in userRevDict:
        innerReview=reviews["review"]
        userRating=innerReview["rating"]
        userReview=innerReview["reviewText"]
        userName=innerReview["userName"]
        reviewDict={"hotel_name":rname ,"customer_name":userName,"review":userReview.translate(non_bmp_map),"rating":userRating}
        x = mydbreview.insert_one(reviewDict)
        #print(reviewDict,'\n',x)

unique_id=2

#Restaurant Update
for rname,rid in restaurantIDMap.items(): 
    restFromRestID = "https://developers.zomato.com/api/v2.1/restaurant?res_id="+rid
    header = {"User-agent": "curl/7.43.0", "Accept": "application/json", "user_key": "61694d8a5fe01a6695eb0ef7f8957e27"}	
    response = requests.get(restFromRestID, headers=header).json()
    with open('restaurantData.json', 'a') as outfile:
        json.dump(response, outfile)
    restAddress = response["location"]["locality"]
    restCity = response["location"]["city"]
    restContact = response["location"]["latitude"][3:]
    restCuisine = response["cuisines"]
    restUID = unique_id
    unique_id+=1
    restTables = randint(5,20)
    hotelDict={"name" : rname, "address" : restAddress, "city" : restCity, "contact" : restContact, "cuisine" : restCuisine, "unique_id" : restUID, "numTables" : restTables}
    y = mydbrest.insert_one(hotelDict)
    #print(hotelDict,'\n',y)
