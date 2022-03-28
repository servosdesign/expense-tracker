import ExpenseItem from '../expense-item/expense-item.component';

import { ExpensesListDiv, ExpensesListFallback } from './expenses-list.styles';

const ExpenseList = props => {
  if (props.items.length === 0) {
    return (
      <ExpensesListFallback>Found No Expenses.</ExpensesListFallback>
    )
  };

  return (
    <ExpensesListDiv>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ExpensesListDiv>
  )
};

export default ExpenseList;