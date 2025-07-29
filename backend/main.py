from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware # Impor untuk CORS

import crud, models, schemas
from database import SessionLocal, engine

# Membuat tabel di database jika belum ada
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Daftar domain frontend yang diizinkan
origins = [
    "http://localhost:3000",
    # "https://nama-aplikasi-anda.netlify.app", # Tambahkan URL Netlify nanti
]

# Menambahkan middleware CORS untuk mengizinkan koneksi dari frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency untuk membuat sesi database per request
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Endpoint untuk membuat transaksi baru
@app.post("/transactions/", response_model=schemas.Transaction)
def create_transaction(transaction: schemas.TransactionCreate, db: Session = Depends(get_db)):
    return crud.create_transaction(db=db, transaction=transaction)

# Endpoint root untuk cek status API
@app.get("/")
def root():
    return {"message": "AccounTech API is running"}