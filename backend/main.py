from fastapi import FastAPI
import models
from database import engine

# Baris ini memerintahkan SQLAlchemy untuk membuat semua tabel dari models
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Selamat datang di AccounTech API"}