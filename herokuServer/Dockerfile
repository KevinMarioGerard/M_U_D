#Grab the latest ubuntu image
FROM ubuntu:latest

#Install python and pip
RUN apt-get update \
  && apt-get install -y python3-pip python3-dev \
  && cd /usr/local/bin \
  && ln -s /usr/bin/python3 python \
  && pip3 install --upgrade pip

#Install npm
RUN apt-get install -y npm

#Adding the python env requirements from host to container
ADD ./webapp/requirements.txt /tmp/requirements.txt

# Install dependencies
RUN pip3 install --no-cache-dir -q -r /tmp/requirements.txt

# Add our src code and build react app
ADD ./ /opt/
WORKDIR /opt
RUN npm install
RUN npm run build
WORKDIR /opt/webapp

# Run the app.  CMD is required to run on Heroku
# $PORT is set by Heroku			
CMD gunicorn --bind 0.0.0.0:$PORT wsgi 
