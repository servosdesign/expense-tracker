import ExpenseForm from './new-expense-form.component';

import './new-expense.styles.css';

const NewExpense = props => {
  const saveExpenseDataHandler = enteredExepenseData => {
    const expenseData = {
      ...enteredExepenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;