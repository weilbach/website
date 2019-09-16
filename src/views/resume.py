import flask
import src
import os

@src.app.route('/Weilbach_Justin_Resume.pdf')
def download_resume():
    filepath = os.path.dirname(os.path.dirname(__file__))
    return flask.send_from_directory(filepath, 'static/assets/Weilbach_Justin_Resume.pdf')