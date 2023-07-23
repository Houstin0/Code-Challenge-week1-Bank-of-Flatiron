import React from "react"
function TransactionsTable ({ transactions }){
  return (
    <table>
        <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
        </tr>

        <tbody>
            {transactions.map((transaction)=>{
                <transaction key={transaction.id} {...transaction}/>
            })}
        </tbody>
    </table>
  )
}
export default TransactionsTable