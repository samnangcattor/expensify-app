import { createStore, combineReducers } from 'redux';

store.subscribe(() => {
  const state = store.getState();
  const visibleExpense = getVisibleExpense(state.expenses, state.filters);
  console.log(visibleExpense);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

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
