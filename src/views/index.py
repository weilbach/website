import flask
import src

@src.app.route('/')
def show_index():
    return flask.render_template('index.html')

@src.app.route('/aboutme/')
def show_aboutme():
    return flask.render_template('aboutme.html')