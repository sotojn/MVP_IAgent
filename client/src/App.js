import Header from './components/Header';
import Navigation from './components/Navigation';
import Lead from './components/Lead';
import './App.css';

function App() {

  const data = [
    {
      id: 1,
      fName: 'John',
      lName: 'Smith',
      date: '1/13/22',
      recent: 'Booked Apt',
      address: '123 S Spooner St, Mesa Az 85225',
      phone:'480-112-1234'},
      {
        id: 2,
        fName: 'April',
        lName: 'Erran',
        date: '4/12/22',
        recent: 'No Answer',
        address: '67 E 8th Pl, Chandler Az 85212',
        phone:'480-346-9934'},
        {
          id: 3,
          fName: 'Tony',
          lName: 'Soprano',
          date: '8/22/21',
          recent: 'No Interest',
          address: '991 W Mafia Dr, Tempe Az 85111',
          phone:'480-678-1857'},
          {
            id: 4,
            fName: 'Mike',
            lName: 'Ike',
            date: '3/5/22',
            recent: 'No Answer',
            address: '671 W Virginia Ln, Tempe Az 85131',
            phone:'602-648-5886'},
            {
              id: 5,
              fName: 'Victor',
              lName: 'Cruz',
              date: '11/11/22',
              recent: 'No Answer',
              address: '101 E Laramie, Gilbert Az 85222',
              phone:'480-999-6704'},
              {
                id: 6,
                fName: 'Mike',
                lName: 'Tyson',
                date: '2/19/21',
                recent: 'No Contact',
                address: '228 N Legend St, Scottsdale Az 85901',
                phone:'602-324-9191'},
                {
                  id: 7,
                  fName: 'John',
                  lName: 'Cena',
                  date: '12/12/22',
                  recent: 'No Contact',
                  address: '679 E Cantseeme Dr, Scottsdale Az 85132',
                  phone:'800-133-0987'},
                  {
                    id: 8,
                    fName: 'Anita',
                    lName: 'Garcia',
                    date: '10/27/22',
                    recent: 'No Answer',
                    address: '1650 E Bruno St Apt 1, Glendale Az 85132',
                    phone:'404-204-2550'},
                    {
                      id: 9,
                      fName: 'Xavier',
                      lName: 'Galifianakis',
                      date: '9/1/22',
                      recent: 'No Answer',
                      address: '1313 E Amber Dr, Mesa Az 85112',
                      phone:'602-888-0010'},
  ];

  return (
    <div>
      <Header />
      <Navigation />
      <Lead leads={data}/>
    </div>
  );
}

export default App;
