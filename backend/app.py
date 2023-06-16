import os
from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/convert", methods=["POST"])
def convert():
    data = request.get_json()
    systemprompt = data["systemprompt"]
    userprompt = data["userprompt"]

    message = []
    message.append({"role": "system", "content": systemprompt})
    message.append({"role": "user", "content": userprompt})

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=message,
        temperature=0.2,
        max_tokens=4000,
        frequency_penalty=0.9
    )

    gpt_message = response.choices[0].message.content
    return jsonify({"bash_command": gpt_message})

if __name__ == "__main__":
    app.run()