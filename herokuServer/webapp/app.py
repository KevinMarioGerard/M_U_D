from flask import Flask, render_template, jsonify, request
import json
from UrlDetection import UrlDetection

app = Flask(__name__,  template_folder='reactApp', static_folder='reactApp/static')

resptemplate = {
    'title': u'M.U.D.',
    'url': 'null',
    'detection': 'null'
}

@app.route('/todo/api/v1/url', methods=['POST'])
def get_tasks():
    print(request.data)
    reqbody = json.loads(request.data.decode('utf-8'))
    resptemplate['url'] = reqbody['url']
    classifier = UrlDetection()
    resptemplate['detection'] = classifier.detect_url(reqbody['url'])
    return jsonify({'response': resptemplate})

@app.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
