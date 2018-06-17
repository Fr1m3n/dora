from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def wait():
    return render_template('wait.html')


@app.route('/main111')
def main():
    return render_template('main.html')

if __name__ == '__main__':
    app.run()
