# uvicorn main:app --reload
import logging
from fastapi import FastAPI, HTTPException, File, UploadFile
from ocr_module import ocr
import os
import shutil
import tempfile

# Configurar el logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

@app.post("/ocr/")
async def ocr_communication(file: UploadFile = File(...)):
    logger.info(f"Recibiendo archivo: {file.filename} con tipo: {file.content_type}")

    # Verificar que el archivo es una imagen
    if not file.content_type.startswith("image/"):
        logger.error("El archivo subido no es una imagen.")
        raise HTTPException(status_code=400, detail="El archivo subido no es una imagen.")

    # Crear un archivo temporal
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=os.path.splitext(file.filename)[1]) as tmp:
            shutil.copyfileobj(file.file, tmp)
            temp_path = tmp.name
        logger.info(f"Archivo temporal guardado en: {temp_path}")
    except Exception as e:
        logger.exception("Error al guardar el archivo temporal.")
        raise HTTPException(status_code=500, detail=f"Error al guardar el archivo: {str(e)}")

    # Realizar OCR
    try:
        texto = ocr(temp_path)
        logger.info("OCR completado exitosamente.")
        return {"texto_extraido": texto}
    except Exception as e:
        logger.exception("Error al procesar OCR.")
        raise HTTPException(status_code=500, detail=f"Error al procesar OCR: {str(e)}")
    finally:
        # Limpiar el archivo temporal
        if os.path.exists(temp_path):
            os.remove(temp_path)
            logger.info(f"Archivo temporal {temp_path} eliminado.")
