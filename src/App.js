import React from "react";
import TransactionsTable from "./TransactionsTable";
import AddNewTransaction from "./AddNewTransaction";

function App() {
  return (
    <div className="App">
      <h2>Transactions</h2>
      <TransactionsTable/>
      <AddNewTransaction/>
    </div>
  );
}

export default App;
