from pydantic import BaseModel
import datetime

class TransactionBase(BaseModel):
    description: str
    type: str
    amount: float

class TransactionCreate(TransactionBase):
    pass

class Transaction(TransactionBase):
    id: int
    date: datetime.datetime

    class Config:
        orm_mode = True