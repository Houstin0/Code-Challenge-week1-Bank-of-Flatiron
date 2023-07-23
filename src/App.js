import React,{useState,useEffect} from "react";
import TransactionsTable from "./TransactionsTable";
import AddNewTransaction from "./AddNewTransaction";

function App() {

  const [transactions,setTransactions]=useState([])
    
  useEffect(()=>{
      fetchTransactions()
  },[])
  
  const fetchTransactions=() =>{
      fetch("https://animeworld-lgf0.onrender.com/transactions")
      .then((response)=> response.json())
      .then((data)=>{
          setTransactions(data)
      })
      .catch((error)=>{
          console.error('Error fetching transactions',error);
      })
  }

  const addTransaction=(newTransaction)=>{
    newTransaction={...newTransaction,id:transactions.length+1}
    setTransactions([...transactions,newTransaction])
  }
  return (
    <div className="App">
      <h2>Transactions</h2>
      <TransactionsTable transactions={transactions}/>
      <AddNewTransaction onAddTransaction={addTransaction}/>
    </div>
  );
}

export default App;
