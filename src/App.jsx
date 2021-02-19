import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import 'fontsource-roboto';

import AppThemeProvider from './context/theme/AppThemeProvider';
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
        <AppThemeProvider>
          <ScopedCssBaseline>
            <Router>
              <Navbar title="Simple Notes" />
              <Switch>
                <Route path={['/', '/notes']} exact>
                  <Home />
                </Route>
                <Route path="/about" exact>
                  <About />
                </Route>
              </Switch>
            </Router>
          </ScopedCssBaseline>
        </AppThemeProvider>
      </AlertProvider>
    </NotesProvider>
  </LoaderProvider>
);
