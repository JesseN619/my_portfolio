import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Header, Home, Resume, Portfolio, Contact } from './components';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
});

ReactDOM.render(

  <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
  <CssBaseline />
    <Router>
    <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/resume'>
              <Resume />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </Router>
        </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
