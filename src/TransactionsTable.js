import React,{useState,useEffect} from "react"
const TransactionsTable= ()=>{
    const [transactions,setTransactions]=useState([])
    
    useEffect(()=>{
        fetchTransactions()
    },[])
    
    const fetchTransactions=() =>{

        fetch("https://animeworld-lgf0.onrender.com/transactions")
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data);
            setTransactions(data)
        })
        .catch((error)=>{
            console.error('Error fetching transactions',error);
        })
    }
   // let transactionElement=[]
    if(transactions &&transactions.length>0){
        return (transactions.map((transaction) => (
        <table>
            <thead>
            <tr>
              <th>Description</th>
              <th>Category</th>
               <th>Amount</th>
            </tr>
            </thead>
        
        <tbody>
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
        </tbody>
        </table>

          ))
        )
    }


    
       
  
}
export default TransactionsTable