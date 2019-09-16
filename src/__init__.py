import flask

app = flask.Flask(__name__) #defaults to name of parent directory eg src

app.config.from_object('src.config') # need config file

app.config.from_envvar('Justin_settings', silent=True)


import src.views
import src.templates

