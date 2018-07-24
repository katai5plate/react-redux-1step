// Reducer：ActionCenterから送られてきた命令を解釈してStateの変更内容を返す

// デフォルトのState
const defaultState = {
    num: 1,
}
export default (state = defaultState, action) => {
    // 読み込まれたActionからStateの変更内容を返す
    switch (action.type) {
        case "ADD-NUMBER": {
            return { num: state.num + 1 };
        };
        case "SUB-NUMBER": {
            return { num: state.num - 1 };
        };
        default: {
            return state;
        };
    }
}