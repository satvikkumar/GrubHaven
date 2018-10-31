import requests
from bs4 import BeautifulSoup
import re
#import urllib.request

#Used headers/agent as the request timed out and asking for agent. Using following code you can fake the agent.
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'}
restaurants ={}
r_list=["xpress-chai-btm"]
for r in r_list :
 response = requests.get("https://www.zomato.com/bangalore/",headers=headers)
 content = response.content
 #print(content)
 soup = BeautifulSoup(content,"html.parser")
