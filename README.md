Reduxの学習を目的として作成したリポジトリです。

## 概要
以下の5つのアプリを含んでいます.
* [sync-without-connect](https://github.com/daichihayasaka/update-posts/tree/master/sync-without-connect)
  * Reactと未連携・外部APIと通信なし
* [sync-with-connect](https://github.com/daichihayasaka/update-posts/tree/master/sync-with-connect)
  * [`connect()`](https://react-redux.js.org/api/connect)を使ってReactと連携・外部APIと通信なし
* [async-with-connect](https://github.com/daichihayasaka/update-posts/tree/master/async-with-connect)
  * [`connect()`](https://react-redux.js.org/api/connect)を使ってReactと連携・外部APIと通信あり
* [async-with-hooks](https://github.com/daichihayasaka/update-posts/tree/master/async-with-hooks)
  * [Hooks](https://react-redux.js.org/api/hooks)を使ってReactと連携・外部APIと通信あり
* [async-with-hooks-and-toolkit](https://github.com/daichihayasaka/update-posts/tree/master/async-with-hooks-and-tookit)
  * [Hooks](https://react-redux.js.org/api/hooks)と[Redux Toolkit](https://redux-toolkit.js.org/)を使ってReactと連携・外部APIと通信あり

## 機能
* 各種ボタンを押すことで、記事(Post) の Title と Body を更新します。

## 動作環境
以下のバージョンで動作を確認しています。
```
$ node -v
v16.14.0

$ yarn -v
1.22.18
```