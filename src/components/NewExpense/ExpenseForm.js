import React, { useState } from 'react'
import './ExpenseForm.css'


const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleHandler = event => setEnteredTitle(event.target.value);

    const amountHandler = event => setEnteredAmount(event.target.value);

    const dateHandler = event => setEnteredDate(event.target.value);


    // alternative way to combine the different input handler function to single one


    // const inputChangeHandler = (identifier, value) => {
    //     if (identifier === 'title') {
    //         setEnteredTitle(value);
    //     } else if (identifier === 'amount') {
    //         setEnteredAmount(value);
    //     } else {
    //         setEnteredDate(value);
    //     }
    // }

    // function to submit the userInput value

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(enteredData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    {/* <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} /> */}
                    <input type="text" value={enteredTitle} onChange={titleHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    {/* <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)} /> */}
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    {/* <input type="date" min="2021-01-01" max="2024-12-30" onChange={(event) => inputChangeHandler('date', event.target.value)} /> */}
                    <input type="date" value={enteredDate} min="2021-01-01" max="2024-12-30" onChange={dateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
