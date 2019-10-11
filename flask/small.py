from flask import Flask, render_template
import json

app = Flask(__name__)


@app.route('/', methods=['GET'])
def hello():
	return json.dumps({'hello': 'world'})

@app.route('/website', methods=['GET'])
def helloHTML():
	return '<h1>Hello World</h1>'

@app.route('/nextmeeting', methods=['GET'])
def timer():
	return render_template('index.html')