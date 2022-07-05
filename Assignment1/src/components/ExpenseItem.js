import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExportItems(props) {
  return (
    <div className="expense-item">
      {/* <div>July 4th, 2022</div> //From Video 33*/} 
      {/* <div>{props.date.toISOString()}</div> */}
      {/* <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>Car Insurance</h2> */}
        <h2>{props.title}</h2>
        {/* <div className="expense-item__price">$497.99</div> */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExportItems;
