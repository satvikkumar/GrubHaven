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

cur_dir = os.path.dirname(os.path.realpath('sentanalysis_client.py'))
print(cur_dir)

target_dir = os.path.join(cur_dir, '../assets/')
target_dir = os.path.abspath(os.path.realpath(target_dir))
os.chdir(target_dir)

for hotel in hotels_list:
	res = requests.post(url = URL ,data = {"hotel_name":hotel})
	view_tables_data  = res.json()
	
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
	plt.xticks(y_pos, freq)
	plt.ylabel('Busyness of Time slot')
	plt.title('Time slot')
	fname = str(hotel) + "_PeakHours.png"
	plt.savefig(fname, bbox_inches='tight')



