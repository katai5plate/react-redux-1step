import { createStore } from 'redux';
import { Provider } from 'react-redux';

// 専用のReducerを読み込む
import reducer from "./reducer/TopPage";
// 描画するコンテナを読み込む
import TopPage from './container/TopPage';

// 使用するStoreをReducerから作成
const store = createStore(reducer);

export default () => (
    <Provider store={store}>
        <TopPage />
    </Provider>
);