from flask import Flask, request, jsonify
from flask_cors import CORS
from imgCompress import compressFunction

app = Flask(__name__)
CORS(app, resources={r"/upload": {"origins": "*"}})  # Permitir cualquier origen en /upload

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"Error": "No image file provided"}), 400
    
    image_file = request.files['image']

    if image_file is None:
        return jsonify({"Error": "Could not read the image"}), 400

    text = compressFunction(image_file)
    return jsonify({"Message": "Image received successfully", "text": text})

if __name__ == '__main__':
    app.run(debug=True)
