#Grab the latest alpine image
FROM alpine:latest

# Install python and pip and npm
RUN apk add --no-cache --update python3 py3-pip bash
RUN apk add --no-cache --update npm bash
ADD ./webapp/requirements.txt /tmp/requirements.txt

# Install dependencies
RUN pip3 install --no-cache-dir -q -r /tmp/requirements.txt

# Add our code
ADD ./ /opt/
WORKDIR /opt
RUN npm install
RUN npm run build
WORKDIR /opt/webapp

# Expose is NOT supported by Heroku
# EXPOSE 5000 		

# Run the image as a non-root user
RUN adduser -D myuser
USER myuser

# Run the app.  CMD is required to run on Heroku
# $PORT is set by Heroku			
CMD gunicorn --bind 0.0.0.0:$PORT wsgi 

