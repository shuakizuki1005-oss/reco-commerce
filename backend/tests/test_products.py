
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


# ① 商品一覧が4件取得できるか
def test_get_products():
    response = client.get("/api/v1/products")

    assert response.status_code == 200

    data = response.json()

    assert len(data) == 4


# ② 商品詳細が正しく取得できるか
def test_get_product_detail():
    response = client.get("/api/v1/products/1")

    assert response.status_code == 200

    data = response.json()

    assert data["id"] == 1
    assert data["name"] == "Wireless Mouse"
    assert data["price"] == 2980


# ③ 存在しない商品で404が返るか
def test_product_not_found():
    response = client.get("/api/v1/products/999")

    assert response.status_code == 404

    assert response.json() == {
        "detail": "Product not found"
    }


# ④ 全商品の価格が0円より大きいか
def test_product_prices():
    response = client.get("/api/v1/products")

    assert response.status_code == 200

    products = response.json()

    for product in products:
        assert product["price"] > 0
