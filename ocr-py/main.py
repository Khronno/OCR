# uvicorn main:app --reload
from fastapi import FastAPI, HTTPException, UploadFile, File
from typing import List
import os
from ocr_module import ocr

app = FastAPI()

@app.post("/ocr/")
async def ocr_communication(files: List[UploadFile] = File(...)):
    extracted_texts = []
    for file in files:
        try:
            # Guardar temporalmente el archivo recibido
            temp_file_path = f"temp_{file.filename}"
            with open(temp_file_path, "wb") as temp_file:
                content = await file.read()
                temp_file.write(content)

            # Procesar el archivo con OCR
            text = ocr(temp_file_path)
            extracted_texts.append({"filename": file.filename, "text": text})

            # Eliminar el archivo temporal
            os.remove(temp_file_path)
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
    
    return {"extracted_texts": extracted_texts}
