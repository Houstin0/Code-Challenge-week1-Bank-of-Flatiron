import React, { useState, useEffect } from "react";
import TransactionsTable from "./TransactionsTable";
import AddNewTransactionForm from "./AddNewTransactionForm";
import TransactionSearchFilter from "./TransactionSearchFilter";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = () => {
    fetch("https://animeworld-lgf0.onrender.com/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error("Error fetching transactions", error);
      });
  };

  const addTransaction = (newTransaction) => {
    newTransaction = { ...newTransaction, id: transactions.length + 1 };
    setTransactions([...transactions, newTransaction]);
  };

  const handleFilterChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleSortChange = (e) => {
    const selectedSortCriteria = e.target.value;
    if (selectedSortCriteria !== sortCriteria) {
      setSortCriteria(selectedSortCriteria);
      setSortOrder("asc"); 
    } else {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    }
  };

  const deleteTransaction = (transactionId) => {
    fetch(`https://animeworld-lgf0.onrender.com/transactions/${transactionId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        
        const updatedTransactions = transactions.filter(
          (transaction) => transaction.id !== transactionId
        );
        console.log(updatedTransactions);
        setTransactions(updatedTransactions);
      })
      .catch((error) => {
        console.error("Error deleting transaction", error);
      });
  };

  const filteredTransactions =
    transactions.filter((transaction) =>{
      if(transaction.description){
        return transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      }
      return false
      })

  return (
    <div className="App">
      <h1>The Bank of Flatiron</h1>
      <TransactionSearchFilter onFilterChange={handleFilterChange} />
      <h2>Bank Transactions</h2>
      <div>
        <label>
          Sort By:
          <select value={sortCriteria} onChange={handleSortChange}>
            <option value={"category"}>Category</option>
            <option value={"description"}>Description</option>
          </select>
        </label>
        <span>Order: {sortOrder === "asc" ? "Ascending" : "Descending"}</span>
      </div>

      <TransactionsTable
        transactions={filteredTransactions}
        onDeleteTransaction={deleteTransaction}
        sortCriteria={sortCriteria}
        sortOrder={sortOrder}
      />
      <AddNewTransactionForm onAddTransaction={addTransaction} />
    </div>
  );
}

export default App;
