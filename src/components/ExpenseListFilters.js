import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = ({ filters, dispatch }) => (
  <div>
    <input type="text" value={filters.text} onChange={(e) => {
      dispatch(setTextFilter(e.target.value));
    }} />
    <select
      value={filters.sortBy}
      onChange={(e) => {
        const sortBy = e.target.value === 'date' ? sortByDate() : sortByAmount();
        dispatch(sortBy);
    }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
