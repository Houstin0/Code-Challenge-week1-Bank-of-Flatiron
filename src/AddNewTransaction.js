import React,{useState} from "react"
import TransactionsTable from "./TransactionsTable"

function AddNewTransaction({onAddTransaction}){
const [newTranaction, setNewTransaction]=useState({
    date: '',
    description:'',
    category:'',
    amount:''
})

const handleSubmitTransaction=(e)=>{
    e.preventDefault()
    console.log(newTranaction);
    onAddTransaction(newTranaction)
    
    setNewTransaction({   //resets the values
        date: '',
        description:'',
        category:'',
        amount:0,
    })             
}

const handleNewTransactionChange=(e)=>{
    console.log(e.target.value);
     const{name,value}=e.target

    setNewTransaction({
        ...newTranaction,[name]:value,
    })
    console.log(newTranaction);
}

return (
    <>
    <h2>Add New Transactions</h2>
    <form onSubmit={handleSubmitTransaction}>
    <label>
        Date:
        <input
        type="date"
        name="date"
        value={newTranaction.date}
        onChange={handleNewTransactionChange}
        />
    </label>
    <label>
        Description:
        <input
        type="text"
        name="description"
        value={newTranaction.description}
        onChange={handleNewTransactionChange}
    
        />
    </label>
    <label>
        Category:
        <input
        type="text"
        name="category"
        value={newTranaction.category}
        onChange={handleNewTransactionChange}
        />
    </label>
    <label>
        Amount:
        <input
        type="number"
        name="amount"
        value={newTranaction.amount}
        onChange={handleNewTransactionChange}
        />
    </label>
    <button type="submit">Add Transaction</button>
    </form>
    <TransactionsTable/>
    </>
)


}

export default AddNewTransaction