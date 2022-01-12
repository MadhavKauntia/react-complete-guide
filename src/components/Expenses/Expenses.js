import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const { items } = props;
  const [year, setYear] = useState("2020");
  const changeYearHandler = (year) => {
    setYear(year);
  };
  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onChangeYear={changeYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
