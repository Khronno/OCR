import cv2
import pytesseract
import numpy as np

pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'

def compressFunction(img):
    # Lee la imagen desde el archivo proporcionado por Flask
    file_bytes = np.frombuffer(img.read(), np.uint8)
    image = cv2.imdecode(file_bytes, cv2.IMREAD_GRAYSCALE)

    # Paso 3: Redimensionamiento (opcional, dependiendo del tamaño original)
    height, width = image.shape
    if width < 800:
        image = cv2.resize(image, (800, int((800 / width) * height)))

    # Extrae el texto
    text = pytesseract.image_to_string(image)
    return text

# Prueba
# with open("C:/Users/ferna/OneDrive/Escritorio/Programacion/OCR/imgs/code.JPG", "rb") as test_img:
#     print(compressFunction(test_img))