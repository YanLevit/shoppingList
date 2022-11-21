
import ExpenseItem from "./components/Expenseitem";

function App() {

  const expense = [
    { title: 'tomato', amount: 10, url: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTezuXWrTsqmBWgKsQSh_Jay-ZHH3mIaUF2cIsQp4Nku3koNlE9A4FpzHKnVh46a4Jfakde2VIgCEWokmF57DE ' },
    { title: 'corn', amount: 8, url: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQN6AjT6gYd94507prZZvV6D6_MCUDTGTBImWBxVyIMyCiyP75y4YqIBwlDEEbrfMLRwWcipEJG_x_TvvpCrhs ' },
    { title: 'eggplant', amount: 6, url: 'https://www.hydrogrow.co.il/wp-content/uploads/2018/02/A51O10-an5ooOO10-E3OU.jpg' },
    { title: 'pepper', amount: 4, url: 'https://www.haprivehashefa.co.il/wp-content/uploads/2019/03/f05-600x400.jpg ' },
  ];

  return (
    <div>
      <h2>Shop list</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        url={expense[0].url}


      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        url={expense[1].url}

      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        url={expense[2].url}

      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        url={expense[3].url}
      ></ExpenseItem>
    </div>
  );

}

export default App;
