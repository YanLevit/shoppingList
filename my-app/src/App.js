import { useState } from 'react';
import Details from './components/Details';
import ExpenseItem from './components/Expenseitem';
import { expense } from './shoppinglist';

function App() {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <h2 style={{ marginLeft: '45%', width: '60%' }}>Shop list</h2>

      {!selected ? (
        expense.map((item, index) => (
          <ExpenseItem
            key={index}
            title={item.title}
            amount={item.amount}
            url={item.url1}
            onClick={() => setSelected(item.title)}
          />
        ))
      ) : (
        <Details title={selected} setSelected={setSelected} />
      )}
    </div>
  );
}

export default App;
