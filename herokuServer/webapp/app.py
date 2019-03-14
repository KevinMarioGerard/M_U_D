from flask import Flask, render_template, jsonify, request
import json
from UrlDetection import UrlDetection

app = Flask(__name__,  template_folder='reactApp', static_folder='reactApp/static')

resptemplate = {
    'title': u'M.U.D.',
    'url': 'null',
    'detection': 'null'
}

def split_url(url):
    urlString = url
    if url.startswith('https://'):
        urlString = url.split('https://')[1]
    elif url.startswith('http://'):
        urlString = url.split('http://')[1]
    return urlString

@app.route('/todo/api/v1/url', methods=['POST'])
def url_tasks():
    print(request.data)
    reqbody = json.loads(request.data.decode('utf-8'))
    urlString = split_url(reqbody['url'])
    resptemplate['url'] = urlString
    print(urlString)
    classifier = UrlDetection()
    resptemplate['detection'] = classifier.detect_url(urlString)
    return jsonify({'response': resptemplate})

@app.route('/todo/api/v1/urlList', methods=['POST'])
def urlList_tasks():
    print(request.data)
    reqbody = json.loads(request.data.decode('utf-8'))
    urlList = reqbody['urllist']
    print(urlList)
    classifier = UrlDetection()
    response = []
    for i in urlList:
        urlString = split_url(i)
        response.append({'url': urlString,
                    'detection': classifier.detect_url(urlString)})
    return jsonify({'title': u'M.U.D.', 'detection': response})

@app.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
