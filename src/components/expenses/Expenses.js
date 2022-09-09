import { useState } from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {

  const [ selectedYear, setSelectedYear ] = useState('');
  
  return (
    <div>
      <ExpensesFilter selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      <Card className="expenses">
        {props.expenses.map((expense) => <ExpenseItem title={expense.title} amount={expense.title} date={expense.date}/>)}
      </Card>
    </div>
  );
}

export default Expenses;
