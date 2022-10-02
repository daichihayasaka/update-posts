## 機能
* 「更新(非同期)」ボタンを押すと、外部APIと通信し、取得したデータが描画されます。
  * APIは[JSON Placeholder](https://jsonplaceholder.typicode.com/)というサービスを利用しました。
* 「リセット」ボタンを押すと、文言が初期化されます。

## ディレクトリ構成
```
/
└── src
    ├── components
    │   └── PostForm.jsx
    ├── containers
    │   └── PostFormContainer.jsx
    ├── features
    │   └── post
    │       ├── post-action.js
    │       └── post-reducer.js
    ├── App.jsx
    ├── index.css
    └── index.jsx
```