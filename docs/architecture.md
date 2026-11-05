# RecoCommerce システムアーキテクチャ

## 1. システム概要

RecoCommerceは、機械学習による商品推薦機能を搭載したECプラットフォームである。

フロントエンドにNext.js、バックエンドにFastAPIを使用する。

## 2. 技術スタック

| 領域 | 技術 |
|---|---|
| Frontend | Next.js / TypeScript / React |
| Backend | Python / FastAPI |
| Database | SQLite / SQLAlchemy |
| Machine Learning | scikit-learn / pandas / NumPy |
| Testing | pytest / Playwright |
| Version Control | Git / GitHub |
| CI | GitHub Actions |

## 3. システム構成

```text
[Browser]
    |
    | HTTP / JSON
    v
[Next.js Frontend]
    |
    | REST API
    v
[FastAPI Backend]
    |
    +----> [SQLite Database]
    |
    +----> [Recommendation Engine]
                |
                +----> [Trained ML Model]
```

## 4. フロントエンド

### 主な役割

- 商品一覧・詳細ページの表示
- 商品検索・フィルタリング
- カート・お気に入り機能
- API通信
- レコメンド結果の表示

### 設計方針

- TypeScriptによる型安全性
- Reactコンポーネントの再利用
- レスポンシブデザイン
- API通信とUIロジックの分離

## 5. バックエンド

### 主な役割

- 商品情報の取得・登録・更新・削除
- ユーザー管理
- 注文処理
- 閲覧・購入履歴の記録
- レコメンドAPI
- データベース操作

### 設計方針

- REST APIを採用
- FastAPIによるリクエスト検証
- ビジネスロジックとAPI処理を分離
- SQLAlchemyによるDB操作

## 6. データベース

開発初期はSQLiteを使用する。

主なテーブル候補：

- users
- products
- categories
- carts
- cart_items
- orders
- order_items
- browsing_history
- favorites

詳細な設計はdatabase.mdで定義する。

## 7. 機械学習

### 初期段階

ルールベースで同じカテゴリの商品を推薦する。

### 第2段階

商品の特徴量を使ったコンテンツベース推薦を実装する。

### 第3段階

ユーザーの行動履歴を利用した協調フィルタリングを実装する。

### 第4段階

複数の推薦モデルを評価・比較する。

### 推論方法

FastAPIから推薦エンジンを呼び出し、
推薦された商品IDを取得する。

その商品IDを使ってDBから商品情報を取得し、
フロントエンドへ返却する。

## 8. API設計方針

APIのベースパス：

/api/v1

主なエンドポイント候補：

- GET /api/v1/products
- GET /api/v1/products/{id}
- GET /api/v1/products/{id}/recommendations
- POST /api/v1/cart/items
- GET /api/v1/cart
- POST /api/v1/orders

認証が必要なAPIでは、適切なアクセス制御を行う。

## 9. ディレクトリ構成

```text
reco-commerce/
├── frontend/
│   └── src/
├── backend/
│   ├── app/
│   └── tests/
├── ml/
│   ├── training/
│   ├── evaluation/
│   └── datasets/
├── docs/
│   ├── requirements.md
│   └── architecture.md
└── .github/
    └── workflows/
```

## 10. 開発・運用方針

- 開発はローカル環境で実施する
- 機密情報は環境変数で管理する
- DBファイルや秘密鍵はGitに登録しない
- Issueごとにブランチを作成する
- PRを経由してmainにマージする
- 自動テストを導入する
- 初期段階は無料で動作する構成を優先する