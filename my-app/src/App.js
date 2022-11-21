
import ExpenseItem from "./components/Expenseitem";

function App() {

  const expense = [
    { title: 'tomato', amount: 10, url: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTezuXWrTsqmBWgKsQSh_Jay-ZHH3mIaUF2cIsQp4Nku3koNlE9A4FpzHKnVh46a4Jfakde2VIgCEWokmF57DE ' },
    { title: 'corn', amount: 8, url: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQN6AjT6gYd94507prZZvV6D6_MCUDTGTBImWBxVyIMyCiyP75y4YqIBwlDEEbrfMLRwWcipEJG_x_TvvpCrhs ' },
    { title: 'eggplant', amount: 6, url: 'https://www.hydrogrow.co.il/wp-content/uploads/2018/02/A51O10-an5ooOO10-E3OU.jpg' },
    { title: 'pepper', amount: 4, url: 'https://www.haprivehashefa.co.il/wp-content/uploads/2019/03/f05-600x400.jpg ' },
    { title: 'cucumber', amount: 13, url: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR-R2XZAllhstELeu30V6_Sr5AGDLg_hZosMu4bR23_Whkz5veYWYypmybGOa3ficaSAkC1X61F1NCFLwRjyj0 ' },
    { title: 'Carrot', amount: 7, url: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTYKD4RKXkqfyJgQyJ3BeEAZtpWlNIIgqUPp1lbNoLidDeRH32ByFnGU18lxSBPuQBrGBTGAk2cdYFGP3CenHE ' },
    { title: 'garlic', amount: 3, url: 'https://tevabari.co.il/images/shutterstock_552242461.jpg ' },
    { title: 'Onion', amount: 11, url: 'https://machonheker.coi.co.il/up/l/87136_wan5.jpg ' },
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

      <ExpenseItem
        title={expense[4].title}
        amount={expense[4].amount}
        url={expense[4].url}
      ></ExpenseItem>

      <ExpenseItem
        title={expense[5].title}
        amount={expense[5].amount}
        url={expense[5].url}
      ></ExpenseItem>

      <ExpenseItem
        title={expense[6].title}
        amount={expense[6].amount}
        url={expense[6].url}
      ></ExpenseItem>

      <ExpenseItem
        title={expense[7].title}
        amount={expense[7].amount}
        url={expense[7].url}
      ></ExpenseItem>
      
    </div>
  );

}

export default App;
