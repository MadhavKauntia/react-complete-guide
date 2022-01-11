import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const { items } = props;
  const [year, setYear] = useState("2020");
  const changeYearHandler = (year) => {
    setYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onChangeYear={changeYearHandler} />
        {items.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
