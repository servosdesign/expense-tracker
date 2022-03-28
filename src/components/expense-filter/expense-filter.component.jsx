import { ExpenseFilterDiv, ExpenseFilterControl, ExpenseFilterLabel, ExpenseFilterSelect } from './expense-filter.styles';

const ExpensesFilter = props => {
  const dropdownChangeHandler = event => {
    props.onChangeFilter(event.target.value);
  }; 
  
  return (
    <ExpenseFilterDiv>
      <ExpenseFilterControl>
        <ExpenseFilterLabel>Filter by year</ExpenseFilterLabel>
        <ExpenseFilterSelect value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </ExpenseFilterSelect>
      </ExpenseFilterControl>
    </ExpenseFilterDiv>
  );
};

export default ExpensesFilter;