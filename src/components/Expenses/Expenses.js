import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [expenseYear, setExpenseYear] = useState("2020");

  const selectExpenseYearHandler = (selectedExpenseYear) => {
    setExpenseYear(selectedExpenseYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={expenseYear}
          onExpenseFilter={selectExpenseYearHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
