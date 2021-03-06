import { useState } from 'react';

import ExpensesList from '../expenses-list/expenses-list.component';
import ExpensesFilter from '../expense-filter/expense-filter.component';
import ExpensesChart from '../expeneses-chart/expenses-chart.component';
import Card from '../card/card.component';

import './expenses.styles.css';


const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return (
      expense.date.getFullYear().toString() === filteredYear
    )
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;