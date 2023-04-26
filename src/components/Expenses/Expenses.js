import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [expenseYear, setExpenseYear] = useState("2020");

  const selectExpenseYearHandler = (selectedExpenseYear) => {
    setExpenseYear(selectedExpenseYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === expenseYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={expenseYear}
          onExpenseFilter={selectExpenseYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expensesList={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
