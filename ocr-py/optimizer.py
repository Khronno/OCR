import cv2
import os
from pdf2image import convert_from_path

def ImageCompressor(path, output_format='jpg', quality=75, scale=1.0):
    if not os.path.isfile(path):
        raise FileNotFoundError(f"No se encontró el archivo: {path}")

    if path.endswith('.pdf'):
        images = convert_from_path(path)
        new_paths = []
        for i, img in enumerate(images):
            img_path = f"{os.path.splitext(path)[0]}_page_{i + 1}.{output_format}"
            img.save(img_path, output_format.upper(), quality=quality)
            new_paths.append(img_path)
        return new_paths
    
    img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise ValueError("No se pudo leer la imagen. Verifique el formato y la integridad del archivo.")

    if scale != 1.0:
        N_WIDTH = int(img.shape[1] * scale)
        N_HEIGHT = int(img.shape[0] * scale)
        img = cv2.resize(img, (N_WIDTH, N_HEIGHT), interpolation=cv2.INTER_LINEAR)

    path_without_extension = os.path.splitext(path)[0]
    new_path = f"{path_without_extension}_compressed.{output_format}"

    if output_format.lower() in ['jpg', 'jpeg']:
        cv2.imwrite(new_path, img, [cv2.IMWRITE_JPEG_QUALITY, quality])
    else:
        cv2.imwrite(new_path, img)

    return new_path
