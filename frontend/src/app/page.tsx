"use client";

import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  // 商品検索
  const [search, setSearch] = useState("");

  // カテゴリ選択
  const [category, setCategory] = useState("All");

  // 価格順の並び替え
  const [sortOrder, setSortOrder] = useState("default");

  // 商品検索とカテゴリ絞り込み
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // 商品をコピーして並び替える
  const sortedProducts = [...filteredProducts];

  if (sortOrder === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>RecoCommerce</h1>
      <p>あなたにぴったりの商品を見つけよう</p>

      <h2>商品一覧</h2>

      {/* 検索・絞り込み・並び替え */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* 商品名検索 */}
        <input
          type="text"
          placeholder="商品名で検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            color: "#111",
            backgroundColor: "#fff",
          }}
        />

        {/* カテゴリ選択 */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            color: "#111",
            backgroundColor: "#fff",
          }}
        >
          <option value="All">すべてのカテゴリ</option>
          <option value="Accessories">Accessories</option>
          <option value="Audio">Audio</option>
        </select>

        {/* 価格順ソート */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            color: "#111",
            backgroundColor: "#fff",
          }}
        >
          <option value="default">登録順</option>
          <option value="price-asc">価格が安い順</option>
          <option value="price-desc">価格が高い順</option>
        </select>
      </div>

      {/* 検索結果 */}
      <p style={{ marginTop: "20px" }}>
        検索結果：{sortedProducts.length}件
      </p>

      {/* 商品一覧 */}
      {sortedProducts.length === 0 ? (
        <p>条件に一致する商品がありません。</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </main>
  );
}