from fastapi import FastAPI, HTTPException

from app.models import Product
from app.products import products

app = FastAPI(
    title="RecoCommerce API",
    description="ECサイトと機械学習レコメンドのAPI",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "message": "RecoCommerce API is running",
    }


# 商品一覧を取得するAPI
@app.get("/api/v1/products", response_model=list[Product])
def get_products():
    return products


# 商品IDから商品詳細を取得するAPI
@app.get("/api/v1/products/{product_id}", response_model=Product)
def get_product(product_id: int):
    for product in products:
        if product["id"] == product_id:
            return product

    raise HTTPException(
        status_code=404,
        detail="Product not found",
    )