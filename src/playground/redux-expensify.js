import { createStore, combineReducers } from 'redux';

// ADD_EXPENDSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILETER
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expense Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filter Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'abcd',
    description: 'Janaury Rent',
    note: 'This was final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  fitlers: {
    text: 'rent',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

