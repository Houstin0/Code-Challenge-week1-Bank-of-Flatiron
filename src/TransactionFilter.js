import React from "react";
function TransactionFilter({onFilterChange}) {
    const handleInputChange=(e)=>{
        const searchItem=e.target.value
        onFilterChange(searchItem)
    }

 return(
    <>
    <label>
        Search Transaction:
        <input
        type="text"
        placeholder="Enter Description"
        onChange={handleInputChange}
        />
    </label>
    </>
 )
}
export default TransactionFilter