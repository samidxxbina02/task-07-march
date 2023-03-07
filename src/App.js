import React, { useState } from "react";
import Counter from "./components/Counter";
import EmployeeTable from "./components/EmployeesTable";
import Paragraph from "./components/Paragraph";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <Counter counter={counter} increment={increment} decrement={decrement} />
      <Paragraph />
      <EmployeeTable />
    </div>
  );
}

export default App;
