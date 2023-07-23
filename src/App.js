import React from "react";
import TransactionsTable from "./TransactionsTable";

function App() {
  fetch("../db.json")
  .then((response)=> response.json())
  .then((data)=>{
      TransactionsTable(data)
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
