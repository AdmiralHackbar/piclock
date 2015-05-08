from flask import Flask, render_template
from flask.ext.assets import Environment, Bundle

app = Flask(__name__)
assets = Environment(app)

js = Bundle('jquery.min.js', 'moment.min.js', 'app.js', filters='jsmin', output='gen/packed.js')
css = Bundle('style.css', output='gen/packed.css')
assets.register('js_all', js)
assets.register('css_all', css)
assets.init_app(app)


## Setup Logging
import logging, sys
file_handler = logging.StreamHandler(stream=sys.stdout)
file_handler.setLevel(logging.WARNING)
app.logger.addHandler(file_handler)


## Route Handlers
@app.route('/')
def hello_world():
    return render_template('main.html')


if __name__ == '__main__':
    app.run()
