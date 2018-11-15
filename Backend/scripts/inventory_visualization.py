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

URL = "http://18.136.208.244:8080/api/listItems"

cur_dir = os.path.dirname(os.path.realpath('inventory_visualization.py'))

#Creating plot
for hotel in hotels_list:
	
#Changing the current working directory to respective hotel folder in assets
	target_dir = os.path.join(cur_dir, '../assets/'+str(hotel)+'/')
	target_dir = os.path.abspath(os.path.realpath(target_dir))
	os.chdir(target_dir)
	

	res = requests.post(url = URL ,data = {"hotel_name":hotel})

	inventory_data  = res.json()

	if inventory_data == [] :
		continue
	else:
		inventory = inventory_data['inventory']
		
		ing_name_list = []
		ing_quantity_list = []
			
		for item in inventory:
			ing_name_list.append(item['ing_name'])
			ing_quantity_list.append(item['ing_quant'])

		print(hotel)
		print(ing_name_list)
		print(ing_quantity_list)

		numeric_ing_quantity = []

		for ing_quantity in ing_quantity_list:
			quantity = ing_quantity.split()
			quantity = int(quantity[0])
			numeric_ing_quantity.append(quantity)

		print(numeric_ing_quantity)

	#Creating plot
		y_pos = np.arange(len(ing_name_list))
		plt.barh(y_pos, numeric_ing_quantity,align='center', alpha=0.5)
		plt.yticks(y_pos, ing_name_list)
		plt.title('Quantity in kg')
		fname = str(hotel) + "_inventory.png"
		plt.savefig(fname)
