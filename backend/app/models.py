from turtle import st
from pydantic import BaseModel, Field

class Product(BaseModel):
    id: int
    name: str
    price: int = Field(gt=0)
    category: str
    in_stock: bool