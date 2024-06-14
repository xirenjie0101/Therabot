from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import openai
from dotenv import load_dotenv
import os
from openai import OpenAI



# Load environment variables from the .env file
load_dotenv()
client = OpenAI()
app = Flask(__name__, static_folder="../therapy-chatbot-frontend/build", static_url_path="/")
CORS(app)

def get_response(message, model):
    try:
        response = openai.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": "You are a Therabot, a mental health chatbot only help user with therapy stuff."},
                {"role": "user", "content": message}
            ],
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"An error occurred: {e}"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    model ="gpt-3.5-turbo"
    bot_reply = get_response(user_message, model)
    return jsonify({"reply": bot_reply})
    
if __name__ == '__main__':
    app.run(debug=True)