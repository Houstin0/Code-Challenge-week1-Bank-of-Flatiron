import React,{useState} from "react"
function AddNewTransaction(){
const [newTranaction, setNewTransaction]=useState({
    date: '',
    description:'',
    category:'',
    amount:''
})

const handleAddTransaction=()=>{}

const handleNewTransactionChange=(e)=>{}

return (
    <>
    <h2>Add New Transactions</h2>
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
    <button onClick={handleAddTransaction}>Add Transaction</button>
    </>
)


}

export default AddNewTransaction