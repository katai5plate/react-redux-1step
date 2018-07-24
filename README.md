# React + Redux の流れ
1. まずコンポーネントで何らかのイベントが発生する
2. Containerでイベントを受け取る
3. 受け取ったイベントに合うactionオブジェクトを作る
4. dispatchを使ってStoreにactionオプジェクトを転送する
5. Reducerに現在のStateとActionを渡す
6. 反映され新しくなったStateを返す
7. Stateを更新する
8. ContainerでStateをPropsに変換する
9. コンポーネントにPropsを渡して画面を更新

# Reduxのきまり
## 1. Stateは１つだけ
- SPA全体のStateは１つのObjectで作られる。
## 2. Stateを直接変更しない
- Stateの変更手段は、変更内容を持ったActionを発行して実行する
## 3. 変更はすべて純粋関数で書く
- Actionがどうやって状態変更するかをReducerが行う

# Container
- ReactとReduxをつなぐためのもの
- connectされる最上位のコンポーネント

# ActionCenter
- Reducerに送る命令を定義する。この命令をActionという。

# Reducer
- ActionCenterから送られてきた命令（Action）を解釈してStateの変更内容を返す。

# Provider
- このコンポーネントで囲むことで、Reducerが有効化されたViewを実現する