import { connect } from 'react-redux';

import TopPage from '../../components/Layouts/TopPage';
import { addNumber } from '../../action/TopPage';
console.log({ addNumber })

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => {
            dispatch(addNumber());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPage);