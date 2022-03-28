import { useState } from 'react';

import { NewExpenseControls, NewExpenseLabel, NewExpenseInput, NewExpenseActions } from './new-expense-form.styles';

const ExpenseForm = props => {
 // const [enteredTitle, setEnteredTitle] = useState('');
 // const [enteredAmount, setEnteredAmount] = useState('');
 // const [enteredDate, setEnteredDate] = useState('');

 const [userInput, setUserInput] = useState({
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: '',
});

  const titleChangeHandler = event => {
    // setEnteredTitle(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value
        };
    });
  };

  const amountChangeHandler = event => {
    // setEnteredAmount(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value
        };
    });
  };

  const dateChangeHandler = event => {
    // setEnteredDate(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value
        };
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate + 'T00:00:00')
    };

    props.onSaveExpenseData(expenseData);
    setUserInput({
    enteredTitle : '' , 
    enteredAmount : '',
    enteredDate : ''
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <NewExpenseControls>
        <div className='new-expense__control'>
          <NewExpenseLabel>Title</NewExpenseLabel>
          <NewExpenseInput type='text' value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <NewExpenseLabel>Amount</NewExpenseLabel>
          <NewExpenseInput type='number' value={userInput.enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <NewExpenseLabel>Date</NewExpenseLabel>
          <NewExpenseInput
            type='date' value={userInput.enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
        </div>
      </NewExpenseControls>
      <NewExpenseActions>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </NewExpenseActions>
    </form>
  );
};

export default ExpenseForm;