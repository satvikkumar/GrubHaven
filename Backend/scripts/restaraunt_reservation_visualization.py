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

URL = "http://18.136.208.244:8080/api/viewReservations"

hotel_time_dict = defaultdict(int)

cur_dir = os.path.dirname(os.path.realpath('restaraunt_reservation_visualization.py'))
print(cur_dir)


for hotel in hotels_list:
	
	#Changing the current working directory to respective hotel folder in assets
	target_dir = os.path.join(cur_dir, '../assets/'+str(hotel)+'/')
	target_dir = os.path.abspath(os.path.realpath(target_dir))
	os.chdir(target_dir)


	res = requests.post(url = URL ,data = {"hotel_name":hotel})
	view_tables_data  = res.json()
	
	if view_tables_data == []:
		continue
	
	else:
		print(view_tables_data)

		for item in view_tables_data:
			hotel_time_dict[int(item['time'])] += 1

		freq = []
		for key in hotel_time_dict.keys():
			freq.append(hotel_time_dict[key])
		print(freq)	 


		#Creating plot
		time_slot = [1,2,3,4,5,6]
		y_pos = np.arange(len(time_slot))
		
		plt.bar(y_pos, freq,width = 0.8,align='center', alpha=0.5)
		plt.xticks(y_pos, time_slot)
		plt.ylabel('Busyness of Time slot')
		plt.title('Time slot')
		fname = str(hotel) + "_PeakHours.png"

		plt.savefig(fname, bbox_inches='tight')



