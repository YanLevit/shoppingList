import { expense } from '../shoppinglist';
import '../App.css';
function Details({ title, setSelected }) {
  const selected = expense.find((item) => item.title === title);
  return (
    <div>
      <div className="Card">
        <button
          style={{ marginLeft: '35%', width: '30%', marginTop: '5%' }}
          onClick={() => setSelected(null)}
        >
          Back
        </button>
        <h2 style={{ marginLeft: '20%', width: '60%' }}>Item Details</h2>
        <img className="Card__image" src={selected?.url2} />
        <div className="Card__content">
          <div className="Card__title">
            {' '}
            <b>Title: </b> {selected?.title}
          </div>
          <div className="Card__description">
            <b>Descripion : </b>
            {selected?.description || 'No Desc'}
          </div>
          <div className="Card__amount">
            <b> Amount : </b> {selected?.amount}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
