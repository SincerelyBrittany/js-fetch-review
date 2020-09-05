# js-fetch-review

Getting Started

confirm you dont have anything running on your server
-lsof -i tcp 3000

if you do 
- kill -9 pid# 

``npm install -f json-server``
``json-server --watch db.json``

Create a file to hold your database named: db.json

How to check if something has a dataset:
const container = document.querySelector('#pokemon-container')
container.dataset
--> will return an empty object
container.dataset.action