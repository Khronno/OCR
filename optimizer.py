import cv2
import os

def ImageCompressor(path, output_format='jpg', quality=75, scale=1.0):
    # Verifica que el archivo existe
    if not os.path.isfile(path):
        raise FileNotFoundError(f"No se encontró el archivo: {path}")

    # Leer la imagen en escala de grises directamente
    img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise ValueError("No se pudo leer la imagen. Verifique el formato y la integridad del archivo.")

    # Redimensionar la imagen si es necesario
    if scale != 1.0:
        N_WIDTH = int(img.shape[1] * scale)
        N_HEIGHT = int(img.shape[0] * scale)
        img = cv2.resize(img, (N_WIDTH, N_HEIGHT), interpolation=cv2.INTER_LINEAR)  # INTER_LINEAR es más rápido y suave

    # Crear la nueva ruta para la imagen optimizada
    path_without_extension = os.path.splitext(path)[0]
    new_path = f"{path_without_extension}_compressed.{output_format}"

    # Guardar la imagen en el formato deseado con compresión ajustada
    if output_format.lower() in ['jpg', 'jpeg']:
        cv2.imwrite(new_path, img, [cv2.IMWRITE_JPEG_QUALITY, quality])
    else:
        cv2.imwrite(new_path, img)  # Para otros formatos como PNG no hay calidad de compresión ajustable

    return new_path
