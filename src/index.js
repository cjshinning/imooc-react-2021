import { createStore } from 'redux';

// 1、创建reducer
function Counter(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return 10;
  }
}

// 2、新建store
let store = createStore(Counter);

// 3、订阅事件
store.subscribe(() => {
  console.log(`现有机关枪${store.getState()}把`);
})

// 4、派发事件
store.dispatch({ type: 'add' });
store.dispatch({ type: 'add' });
store.dispatch({ type: 'minus' });