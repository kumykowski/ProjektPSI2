from flask import Flask, request, jsonify
import openai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/message', methods=['POST'])
def get_response():
    user_input = request.json['message']
    response = openai.Completion.create(
      engine="davinci",
      prompt=user_input,
      max_tokens=150
    )
    return jsonify({'response': response.choices[0].text.strip()})

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Zmień port na 5000

