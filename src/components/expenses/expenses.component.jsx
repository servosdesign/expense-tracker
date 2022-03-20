import { useState } from 'react';

import ExpenseItem from '../expense-item/expense-item.component';
import Card from '../card/card.component';

import './expenses.styles.css';
import ExpensesFilter from '../expense-filter/expense-filter.component';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');
  
  const filterChangeHandler = selectedYear => {
   setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        
        {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}  
      </Card>
    </div>
  );
};

export default Expenses;