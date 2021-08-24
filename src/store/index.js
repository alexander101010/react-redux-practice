// const redux = require('redux'); // node import
// import redux from 'redux';
import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// const store = redux.createStore(counterReducer);
const store = createStore(counterReducer);

export default store;
