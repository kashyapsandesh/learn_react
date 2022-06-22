import React from 'react'

import UserInputTile from './UserInputTile'
const DataStore = () => {
    const enteredExpenseData=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random.toString(),
           
        }
        console.log(expenseData);
    }
  return (
    <div className='datastore'>
        <UserInputTile onSaveDataHandler={enteredExpenseData}/>
    </div>
  )
}

export default DataStore