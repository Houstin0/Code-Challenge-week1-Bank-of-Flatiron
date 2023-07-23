import React,{useState,useEffect} from "react";
import TransactionsTable from "./TransactionsTable";
import AddNewTransaction from "./AddNewTransaction";
import TransactionFilter from "./TransactionFilter";

function App() {
  const [transactions,setTransactions]=useState([])
  const [searchTerm, setSearchTerm]=useState('')
    
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

  const handleFilterChange=(searchTerm)=>{
    setSearchTerm(searchTerm)
  }

  const filteredTransactions=transactions.filter((transaction)=>
  transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const deleteTransactions=(transactionId)=>{
    const updatedTransactions=transactions.filter(
      (transaction)=>transaction.id!==transactionId)
      setTransactions(updatedTransactions)
  }
   
  return (
    <div className="App">
      <h2>Transactions</h2>
      <TransactionFilter onFilterChange={handleFilterChange}/>
      <TransactionsTable 
      transactions={filteredTransactions}
      onDeleteTransaction={deleteTransactions}
      />
      <AddNewTransaction onAddTransaction={addTransaction}/>
    </div>
  );
}

export default App;
