import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TopPage from './container/TopPage';

import reducer from "./reducer";

const store = createStore(reducer);

export default () => (
    <Provider store={store}>
        <TopPage />
    </Provider>
);