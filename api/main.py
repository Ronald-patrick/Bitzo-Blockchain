from urllib import response
from fastapi import FastAPI
from urllib.request import urlopen, Request
import requests
from bs4 import BeautifulSoup

app = FastAPI()

@app.get("/getManufacturer")
def getManufacturerLocation():
    r = requests.get('https://vymaps.com/IN/Netcom-Business-Solutions-244801096369999/')
    
    soup = BeautifulSoup(r.content, 'html.parser')
    s = soup.find('td',itemprop="geo")
    content = s.find('a').getText()
    
    addr = content.split(",")
    addr[1]= addr[1].strip()

    address = soup.find('td',itemprop="address").getText()

    s = soup.find('h1',itemprop="name")
    name = s.find('a').getText()

    phone = soup.find('td',itemprop="telephone").getText()
    

    return {
        "Company Name : ": name,
        "Company Address" : address,
        "Phone number" : phone,
        "longitude" : addr[0],
        "latitude" : addr[1]
    }
