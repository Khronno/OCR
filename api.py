#Start with : uvicorn OCR.api:app --reload

from fastapi import FastAPI
app = FastAPI()

@app.get("/my-first-api")
def hello():
  return {"Hello world!"}