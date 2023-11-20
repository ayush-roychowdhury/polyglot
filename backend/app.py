from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400

    filename = secure_filename(file.filename)
    file.save(os.path.join('uploads', filename))

    return jsonify({'message': f'{filename} uploaded successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)
