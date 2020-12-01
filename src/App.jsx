import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlertProvider from './context/alert/AlertProvider';
import NotesProvider from './context/notes/NotesProvider';
import LoaderProvider from './context/loader/LoaderProvider';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';

export default () => (
  <LoaderProvider>
    <NotesProvider>
      <AlertProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path={['/', '/notes']} exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </AlertProvider>
    </NotesProvider>
  </LoaderProvider>
);
