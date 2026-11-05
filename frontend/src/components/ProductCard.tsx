import type { Product } from "../types/product";

// コンポーネントが受け取るデータの型
type ProductCardProps = {
    product: Product;
};

// 商品カードコンポーネント
export default function ProductCard({
    product,
}: ProductCardProps) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
            }}
        >

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p>カテゴリ:{product.category}</p>

            <p>価格:￥{product.price.toLocaleString()}</p>
            
            <p>{product.inStock ? "在庫あり" : "在庫なし"}</p>
        </div>
    );
}