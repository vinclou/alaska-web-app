import React from 'react';
import 'materialize-css';
import '../src/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  appBarSpacer: theme.mixins.toolbar,
}));

function App() {

  const {token, login, logout, userId} = useAuth();
  const isAuthenticated = !!token;

  const routes = useRoutes(isAuthenticated);
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: '#42b266',

      },
      secondary: {
        main: '#689f38',

      },
    },
  });

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className={classes.root} >

    <AuthContext.Provider value = {{token, login, logout, userId, isAuthenticated}}>

      <React.Fragment>

        <Router>
          <Navbar/>
          <div className={classes.content}>
            <div className={classes.appBarSpacer} />
            { isAuthenticated  }
            <div >
              {routes}
            </div>
          </div>
        </Router>

      </React.Fragment>
    </AuthContext.Provider>

    </div>

    </ThemeProvider>
  );

}

export default App;