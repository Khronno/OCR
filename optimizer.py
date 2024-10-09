import cv2
import os

def ImageCompressor(path, output_format='jpg', quality=75):
    # Verifica que el archivo existe
    if not os.path.isfile(path):
        raise FileNotFoundError(f"No se encontró el archivo: {path}")

    # Obtener la extensión del archivo original
    _, extension = os.path.splitext(path)
    
    # Leer la imagen en escala de grises
    img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise ValueError("No se pudo leer la imagen. Verifique el formato y la integridad del archivo.")

    # Redimensionar la imagen (ajustar si es necesario)
    N_WIDTH = int(img.shape[1] * 2)  # Mantiene el ancho original
    N_HEIGHT = int(img.shape[0] * 2)  # Mantiene la altura original
    IMG_RES = cv2.resize(img, (N_WIDTH, N_HEIGHT), interpolation=cv2.INTER_NEAREST)

    # Crear la nueva ruta para la imagen optimizada
    path_without_extension = os.path.splitext(path)[0]
    new_path = f"{path_without_extension}.{output_format}"

    # Guardar la imagen en el formato deseado
    if output_format.lower() in ['jpg', 'jpeg']:
        cv2.imwrite(new_path, IMG_RES, [int(cv2.IMWRITE_JPEG_QUALITY), quality])
    else:
        cv2.imwrite(new_path, IMG_RES)  # Para otros formatos, ajustar según sea necesario

    return new_path