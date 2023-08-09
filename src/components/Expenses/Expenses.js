import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {

    const expenses = props.expense;
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }


    //logic to filter the data according to selectedYear

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                {filteredExpenses.length === 0 ? <h1 className='expenses__empty'>No items found</h1> : filteredExpenses.map((item) => {
                    return <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date} />
                })};

                {/* <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
                <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} /> */}
            </Card>
        </div>
    )
}

export default Expenses

