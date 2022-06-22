import React, { useState } from  'react'

const Datapublishtitle = (props) => {
      const [title, setTitle] = useState(props.title);
    
      const clickHandler = (e)=>{
        setTitle("Paid")
      }
  return (
    <div className="datapublish-title">
      <h2>{title}</h2>
      <div className="new-expense__action">
        <button type="submit" onClick={clickHandler} >Add Expense</button>
      </div>
    </div>
  );
}

export default Datapublishtitle