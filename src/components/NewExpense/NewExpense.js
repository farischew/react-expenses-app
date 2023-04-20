import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const [addButton, setAddButton] = useState(false);

  const addButtonHandler = () => {
    setAddButton(true);
  };

  const buttonReset = () => {
    setAddButton(false);
  };

  let newExpenseContent = (
    <button onClick={addButtonHandler}>Add New Expense</button>
  );

  if (addButton === true) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        buttonHandler={buttonReset}
      />
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
