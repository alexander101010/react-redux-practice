// const redux = require('redux'); // node import
// import redux from 'redux';
// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter-slice';
import authReducer from './auth-slice';

// preparing slice of global state. every slice needs a name
// createSlice uses another package called immer(?) to rewrite code we write that seems to mutate state -- immer translates it into immutable codes
// const counterSlice = createSlice({ // moved to separate file!
//   name: 'counter',
//   initialState: initialStateCounter,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload.amount;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'INCREMENT') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'INCREASE') {
//     return {
//       counter: state.counter + action.payload.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'DECREMENT') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'TOGGLE') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const store = redux.createStore(counterReducer);
// const store = createStore(counterReducer);

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
