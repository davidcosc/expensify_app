import {createStore} from 'redux';
console.log('Running react-101.js!');

const store = createStore((state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1,};
        case 'DECREMENT':
            return {count: state.count - 1,};
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }
    return state;
});
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch({
    type: 'RESET',
});
store.dispatch({
    type: 'INCREMENT',
});
store.dispatch({
    type: 'INCREMENT',
});
store.dispatch({
    type: 'DECREMENT',
});
store.dispatch({
    type: 'RESET',
});