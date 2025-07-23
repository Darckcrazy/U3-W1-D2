import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
import MyFooter from './components/MyFooter';
import books from './data/fantasy.json';

const App = () => (
  <>
    <MyNav />
    <Welcome />
    <BookList books={books} />
    <MyFooter />
  </>
);

export default App;
