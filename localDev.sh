#!/bin/sh

#open directory for server
cd herokuServer

#build docker image based on Dockerfile
docker image build -t flask-server .

#start docker container & open chrome browser with localhost:5000
open -a /Applications/Google\ Chrome.app "http://localhost:5000/" & docker run -p 5000:5000 -e PORT=5000 flask-server
