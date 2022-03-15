import { useState } from 'react';
import ExpenseDate from '../expense-date/expense-date.component';
import Card from '../card/card.component';

import './expense-item.styles.css';

const ExpenseItem = props => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = (props) => {
    setTitle('Updated!');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;