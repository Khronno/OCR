import pytesseract
from optimizer import ImageCompressor
import os

pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'

def ocr(PATHS_TO_IMAGES: list) -> str:
    extracted_text = ""
    for path in PATHS_TO_IMAGES:
        try:
            NEW_PATH = ImageCompressor(path, 'jpg', 75)
            text = pytesseract.image_to_string(NEW_PATH, lang='spa')
            extracted_text += text + "\n"
        except Exception as e:
            raise RuntimeError(f"Error al procesar la imagen {path}: {e}")
        finally:
            if os.path.exists(NEW_PATH):
                os.remove(NEW_PATH)
    return extracted_text
