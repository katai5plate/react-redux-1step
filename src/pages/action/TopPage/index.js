// ActionCenter：Reducerに送る命令を定義する

export default {
    addNumber: () => {
        return { type: 'ADD-NUMBER' };
    },
    subNumber: () => {
        return { type: 'SUB-NUMBER' };
    },
}