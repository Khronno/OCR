import pytesseract
from optimizer import ImageCompressor

pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'

def ocr(PATH_TO_IMAGE: str) -> str:
    NEW_PATH = ImageCompressor(PATH_TO_IMAGE, 'jpg', 75)
    text = pytesseract.image_to_string(NEW_PATH, lang='spa')
    return text