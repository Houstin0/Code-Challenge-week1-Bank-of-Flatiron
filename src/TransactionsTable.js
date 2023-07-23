import React,{useState,useEffect} from "react"
function TransactionsTable (){
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
            {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
        ))}</tbody>
        </table>) 
}
export default TransactionsTable