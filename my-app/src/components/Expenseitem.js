import './Expenseitem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item" onClick={props.onClick}>
      <div className="expense-item_description">
        <b>Title :</b> {props.title}
      </div>
      <div className="expense-item_price">
        <b>Amount :</b> {props.amount}{' '}
      </div>
      <img className="expense-item_image" src={props.url} alt="" />
    </div>
  );
}

export default ExpenseItem;
