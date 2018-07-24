const defaultState = {
    num: 1,
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case "ADD-NUMBER": {
            return { num: state.num + 1 };
        };
        default: {
            return state;
        };
    }
}