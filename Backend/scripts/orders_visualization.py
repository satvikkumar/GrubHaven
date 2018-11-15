# importing the requests library 
import requests
import nltk 
import os
from itertools import groupby
from collections import defaultdict,Counter

import numpy as np
import matplotlib.pyplot as plt

# api-endpoint 
URL = "http://18.136.208.244:8080/api/viewReview"

res = requests.post(url = URL ,data = {"city":"Bangalore"})
review_data  = res.json()
hotels_list = []

#Fetching the list of hotels 
for item in review_data:
	if item['hotel_name'] not in hotels_list:
		hotels_list.append(item['hotel_name'])

URL = "http://18.136.208.244:8080/api/pullOrderHistory"

cur_dir = os.path.dirname(os.path.realpath('orders_visualization.py'))

#Creating plot
for hotel in hotels_list:
	
	
	#Changing the current working directory to respective hotel folder in assets
	target_dir = os.path.join(cur_dir, '../assets/'+str(hotel)+'/')
	target_dir = os.path.abspath(os.path.realpath(target_dir))
	os.chdir(target_dir)
	

	res = requests.post(url = URL ,data = {"hotel_name":hotel})

	orders_data  = res.json()

	if orders_data == [] :
		continue

	else:
		res = requests.post(url = URL ,data = {"hotel_name":hotel})
		orders_data  = res.json()
		
		order_quantity_dict = defaultdict(int)
		
		for item in orders_data:

			order_list = item['dish']
			quantity_list = item['quantity']

			for order,quantity in zip(order_list,quantity_list):
				order_quantity_dict[order] += int(quantity)

		orders_list = []
		quantity_list = []

		for item in order_quantity_dict.items():
			orders_list.append(item[0])
			quantity_list.append(item[1])


		#Creating plot
		y_pos = np.arange(len(orders_list))
		
		plt.bar(y_pos, quantity_list,width = 0.8,align='center', alpha=0.5)
		plt.xticks(y_pos, orders_list,rotation = '20')
		plt.ylabel('Popularity')
		plt.title('Popularity of Dishes')
		fname = str(hotel) + "_populardishes.png"

		plt.savefig(fname)
		plt.clf()
