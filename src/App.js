import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
 import SingleBook from './components/SingleBook';
import fantasy from"./data/fantasy.json"



function App() {
  return (
    <div>
      <header>
        <MyNav />
        <Welcome/>
    <BookList arrayOfBooks={fantasy} />
        <MyFooter />

      </header>
    </div>
  );
}

export default App;
