import ExportItems from "./ExpenseItem";
function DisplayExpenses(props) {
    // console.log(props.data);
    return (
    <div>
      <ExportItems
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      ></ExportItems>
      <ExportItems
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      ></ExportItems>
      <ExportItems
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      ></ExportItems>
      <ExportItems
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      ></ExportItems>
    </div>
  );
}

export default DisplayExpenses;
