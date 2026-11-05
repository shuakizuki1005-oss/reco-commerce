from fastapi import FastAPI

app = FastAPI(
    title="RecoCommerce API",
    description="ECサイト機械学習レコメンドのAPI",
    version="0.1.0"
)

@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "message": "RecoCommerce API is running"
    }