from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
   return render_template('home.html')

@app.route('/quentins_page')
def quentins_page():
    return render_template('quentins_page.html')

@app.route('/exploring_css')
def exploring_css():
    return render_template('exploring_css.html')

@app.route('/exploring_js')
def exploring_js():
    return render_template('exploring_js.html')

@app.route('/simple_web_page')
def simple_web_page():
    return render_template('simple_web_page.html')

@app.route('/to_do_list')
def to_do_list():
    return render_template('to_do_list.html')

@app.route('/using_canvas')
def using_canvas():
    return render_template('using_canvas.html')    

@app.route('/color_picker')
def color_picker():
    return render_template('color_picker.html')    

@app.route('/paint_canvas')
def paint_canvas():
    return render_template('paint_canvas.html')  

@app.route('/prototype')
def prototype():
    return render_template('prototype.html') 

@app.route('/green_screen')
def green_screen():
    return render_template('green_screen.html')   

@app.route('/filter_fun')
def filter_fun():
    return render_template('filter_fun.html')        

if __name__ == '__main__':
   app.run(debug=True)