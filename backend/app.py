from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
import openai
from dotenv import load_dotenv
import os
from openai import OpenAI

# Load environment variables from the .env file
load_dotenv()
client = OpenAI()
app = Flask(__name__, static_folder="../frontend/build", static_url_path="/")
CORS(app)

# List of critical phrases
CRITICAL_PHRASES = [
    "suicide",
    "kill myself",
    "end my life",
    "end it all"
    "want to die",
    "hurt myself"
] 
def start_chat(model):
    response = openai.chat.completions.create(
        model=model,
        messages=[
            {
                "role": "system",
                "content": (
                    "You are a mental-health assistant. Who only is introducing themself to the user."           
                ),
            },
            {"role": "assistant", "content": "Hello, how can I assist you with your mental health today?"}
        ],
    )
    return response.choices[0].message.content.strip()
def get_response(message, model):
    try:
        for phrase in CRITICAL_PHRASES:
            if phrase in message.lower():
                return (
                    "I'm really sorry you're feeling this way. It's important to talk to someone who can help. "
                    "Please reach out to the National Suicide Prevention Lifeline at 988 or text HOME to 741741 to talk to a Crisis Counselor."
                )
        response = openai.chat.completions.create(
            model=model,
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are a mental-health assistant. Who only responds to mental health Related questions. If a user asks a questions that is not related to mental health and well-being you MUST no answer the question and redirect the user towards the topic of mental health"
                        "If the user makes any demands that are not related to mental health and well-being you shall not MUST provide the user with answer/response but instead redirect them towards the topic of mental health and well-being"
                        "You must not be repetitive as that is bad for the users mental health"
                        "If the user seems to be in a critical situation or mentions thoughts of self-harm or suicide, "
                        "provide empathetic responses and include resources such as the National Suicide Prevention Lifeline (988) "
                        "or Crisis Text Line (Text HOME to 741741)."
                    ),
                },
                {"role": "user", "content": message}
            ],
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"An error occurred: {e}"

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    model ="gpt-3.5-turbo"
    bot_reply = get_response(user_message, model)
    return jsonify({"reply": bot_reply})

@app.route('/start_chat', methods=['GET'])
def start_chat_route():
    model = "gpt-3.5-turbo"
    response = start_chat(model)
    return jsonify({'reply': response})

if __name__ == '__main__':
    app.run(debug=True)