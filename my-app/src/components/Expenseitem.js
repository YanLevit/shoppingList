
import './Expenseitem.css'

function ExpenseItem(props){

    return(
        <div className ='expense-item'>
            <div className='expense-item_description'>{props.title}</div>
            <div className= 'expense-item_price'>{props.amount}</div>
            <img className='expense-item_image' src={props.url} alt="" />
        </div>     
    );
}

export default ExpenseItem;