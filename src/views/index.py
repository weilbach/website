import flask
import src

@src.app.route('/')
def show_index():
    return flask.render_template('index.html')