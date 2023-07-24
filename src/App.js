import React,{useState,useEffect} from "react";
import TransactionsTable from "./TransactionsTable";
import AddNewTransactionForm from "./AddNewTransactionForm";
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

  const [sortCriteria, setSortCriteria] = useState("date")
  const [sortOrder, setSortOrder] = useState("asc")

  const handleSortChange = (e) => {
    const selectedSortCriteria = e.target.value;
    if (selectedSortCriteria !== sortCriteria) {
      setSortCriteria(selectedSortCriteria);
      setSortOrder("asc"); // Reset to ascending order when changing criteria
    } else {
      // If the same criteria is selected again, reverse the sort order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    }
  };
   
  return (
    <div className="App">
      <h2>Transactions</h2>
      <TransactionFilter onFilterChange={handleFilterChange}/>
      <div>
        <label>
          Sort By:
          <select value={sortCriteria} onChange={handleSortChange}>
            <option value={'category'}>Category</option>
            <option value={'description'}>Description</option>
          </select>
        </label>
        <span>{sortOrder==='asc'?'Ascending':'Descending'}</span>
      </div>
      <TransactionsTable 
      transactions={filteredTransactions}
      onDeleteTransaction={deleteTransactions}
      sortCriteria={sortCriteria}
      sortOrder={sortOrder}
      />
      <AddNewTransactionForm onAddTransaction={addTransaction}/>
    </div>
  );
}

export default App;
