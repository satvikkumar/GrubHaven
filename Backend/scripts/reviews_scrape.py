import requests
from pprint import pprint
import sys
import json
import pymongo

non_bmp_map = dict.fromkeys(range(0x10000, sys.maxunicode + 1), 0xfffd)
restaurantIDMap = {"TheBlackPerl":"18387426","Truffles":"51040"}
'''
reveiwFromRestID = "https://api.zomato.com/v1/reviews.json/18387426/user?count=50&apikey=61694d8a5fe01a6695eb0ef7f8957e27"
header = {"User-agent": "curl/7.43.0", "Accept": "application/json"}
response = requests.get(reveiwFromRestID, headers=header).json()
with open('data.json', 'a') as outfile:
    json.dump(response, outfile)
'''
myclient = pymongo.MongoClient("mongodb://18.136.208.244:27017/")
mydb = myclient["drms"]
mycol = mydb["reviews"]

for rname,rid in restaurantIDMap.items(): 
    reveiwFromRestID = "https://api.zomato.com/v1/reviews.json/"+rid+"/user?count=50&apikey=61694d8a5fe01a6695eb0ef7f8957e27"
    header = {"User-agent": "curl/7.43.0", "Accept": "application/json"}

    response = requests.get(reveiwFromRestID, headers=header).json()
    with open('data.json', 'a') as outfile:
        json.dump(response, outfile)
    #dictdump = json.loads(response)
    userRevDict = response["userReviews"]
    for reviews in userRevDict:
        innerReview=reviews["review"]
        userRating=innerReview["rating"]
        userReview=innerReview["reviewText"]
        userName=innerReview["userName"]
        reviewDict={"hotel_name":rname ,"customer_name":userName,"review":userReview.translate(non_bmp_map),"rating":userRating}
        x = mycol.insert_one(reviewDict)
        print(reviewDict)
    
