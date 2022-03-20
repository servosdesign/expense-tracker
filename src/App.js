import { useState } from 'react';

import Expenses from "./components/expenses/expenses.component";
import NewExpense from "./components/new-expense/new-expense.component";
  
const App = () => {
  const [expenses, seteExpenses] = useState([]);
  
  const addExpenseHandler = expense => {
    seteExpenses((prevExpenses) => {
      return (
        [expense, ...prevExpenses])
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
