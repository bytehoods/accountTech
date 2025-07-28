from sqlalchemy import Column, Integer, String, Float, DateTime
from database import Base
import datetime

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(DateTime, default=datetime.datetime.now)
    description = Column(String(255), index=True)
    type = Column(String(50))  # Misal: "Penjualan", "Pembelian", "Biaya Operasional"
    amount = Column(Float)