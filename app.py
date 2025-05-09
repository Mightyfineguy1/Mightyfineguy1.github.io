from flask import Flask, render_template, request, jsonify
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

# Create chatbot instance
chatbot = ChatBot("MyBot", storage_adapter="chatterbot.storage.SQLStorageAdapter")

# Train it (only do this once, or add logic to skip if already trained)
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train("chatterbot.corpus.english")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get", methods=["POST"])
def get_bot_response():
    user_text = request.form["msg"]
    response = str(chatbot.get_response(user_text))
    return jsonify({"reply": response})

if __name__ == "__main__":
    app.run(debug=True)
