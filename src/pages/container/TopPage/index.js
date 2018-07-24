import { connect } from 'react-redux';

// Reduxを有効化するコンポーネント
import Target from '../../components/Layouts/TopPage';

// Action関数が格納されたコード
import action from '../../action/TopPage';

// StateをPropsに変換
const mapStateToProps = state => {
    return state;
};

// DispatchされたActionをPropsに変換
const mapDispatchToProps = dispatch => {
    return {
        handleClick: methodName => {
            const selectedAction = action[methodName]();
            dispatch(selectedAction);
        }
    }
}

// Reduxを接続したコンポーネントを出力
export default connect(mapStateToProps, mapDispatchToProps)(Target);