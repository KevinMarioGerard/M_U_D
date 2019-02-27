from flask import Flask, render_template
app = Flask(__name__,  template_folder='reactApp', static_folder='reactApp/static')

@app.route("/")
def hello():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()