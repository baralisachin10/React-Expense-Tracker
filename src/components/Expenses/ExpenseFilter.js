import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
    const dropdownHandler = (event) => {
        const filteredYear = event.target.value;
        props.onFilterChange(filteredYear);
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownHandler}>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;