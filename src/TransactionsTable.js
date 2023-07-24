import React from "react"
function TransactionsTable ({transactions=[],onDeleteTransaction,sortCriteria, sortOrder}){
    const sortedTransactions = [...transactions].sort((a, b) => {
        if (sortOrder === "asc") {
          return a[sortCriteria].localeCompare(b[sortCriteria]);
        } else {
          return b[sortCriteria].localeCompare(a[sortCriteria]);
        }
      });
  return (
        <table>
            <thead>
            <tr>
             <th>Date</th>
             <th>Description</th>
             <th>Category</th>
             <th>Amount</th>
            </tr>
            </thead>
        <tbody>
            {sortedTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td><button onClick={()=>onDeleteTransaction(transaction.id)}
              >Delete</button>
              </td>
            </tr>
        ))}</tbody>
        </table>) 
}
export default TransactionsTable