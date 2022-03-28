import { useState } from 'react';

import ExpenseForm from './new-expense-form/new-expense-form.component';

import './new-expense.styles.css';
import { NewExpenseDiv, NewExpenseBtn } from './new-expense.styles';

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = enteredExepenseData => {
    const expenseData = {
      ...enteredExepenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHanlder = () => {
    setIsEditing(false);
  };

  return (
    <NewExpenseDiv>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHanlder} />}
    </NewExpenseDiv>
  );
};

export default NewExpense;