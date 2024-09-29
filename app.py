from flask import Flask, request, render_template, redirect
import sqlite3

app = Flask(__name__)

# Connect to the SQLite database
def get_db_connection():
    conn = sqlite3.connect('db.sqlite3')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    return render_template('register.html')

@app.route('/register', methods=['POST'])
def register():
    username = request.form['new-username']
    password = request.form['new-password']

    # Connect to the database
    conn = get_db_connection()
    try:
        # Insert user data into the database
        conn.execute('INSERT INTO users (username, password) VALUES (?, ?)', 
                     (username, password))
        conn.commit()
        success_message = "Registration successful!"
    except Exception as e:
        success_message = "Registration failed: " + str(e)
    finally:
        conn.close()

    # Display success message on the page
    return render_template('register.html', success_message=success_message)

@app.route('/success')
def success():
    return "Registration successful!"

if __name__ == '__main__':
    # Create the SQLite database and table if they don't exist
    conn = get_db_connection()
    conn.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL)')
    conn.close()
    
    app.run(debug=True)
