import React from 'react'

const DataPublishdate = (props) => {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
  return (
    <div className="datapublish-date">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div>{day}</div>
      </div>
    </div>
  );
}

export default DataPublishdate