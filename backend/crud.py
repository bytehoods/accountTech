from sqlalchemy.orm import Session
import models
import schemas

def create_transaction(db: Session, transaction: schemas.TransactionCreate):
    db_transaction = models.Transaction(
        description=transaction.description,
        type=transaction.type,
        amount=transaction.amount
    )
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction