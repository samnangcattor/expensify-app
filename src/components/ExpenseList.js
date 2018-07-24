import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpsenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = ({ expenses }) => (
  <div>
    <h1>Expense List</h1>
    {
      expenses.map((expense, index) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
