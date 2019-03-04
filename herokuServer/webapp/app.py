from flask import Flask, render_template, jsonify
app = Flask(__name__,  template_folder='reactApp', static_folder='reactApp/static')

sample = {
    'title': u'M.U.D.',
    'description': 'Classify between benign and malicious urls'
}

@app.route('/todo/api/v1/url', methods=['GET'])
def get_tasks():
    return jsonify({'response': sample})

@app.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
