import { ExpenseDateDiv, ExpenseDateMonth, ExpenseDateYear, ExpenseDateDay } from './expense-date.styles';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <ExpenseDateDiv>
      <ExpenseDateMonth>{month}</ExpenseDateMonth>
      <ExpenseDateYear>{year}</ExpenseDateYear>
      <ExpenseDateDay>{day}</ExpenseDateDay>
    </ExpenseDateDiv>
  );
};

export default ExpenseDate;