import ExpenseDate from '../expense-date/expense-date.component';
import Card from '../card/card.component';

import './expense-item.styles.css';
import { ExpenseItemDescription, ExpenseItemHeader, ExpenseItemPrice } from './expense-item.styles';

const ExpenseItem = props => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <ExpenseItemDescription>
          <ExpenseItemHeader>{props.title}</ExpenseItemHeader>
          <ExpenseItemPrice>{props.amount}</ExpenseItemPrice>
        </ExpenseItemDescription>
      </Card>
    </li>
  );
};

export default ExpenseItem;