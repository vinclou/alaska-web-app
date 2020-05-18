import React from 'react';
import 'materialize-css';
import '../src/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { DashboardPage} from './pages/DashboardPage';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    display: 'flex',
    height: "100%",
  },
  appBarSpacer: theme.mixins.toolbar,
}));

function App() {

  const {token, login, logout, userId} = useAuth();
  const isAuthenticated = !!token;

  const routes = useRoutes(isAuthenticated);
  const classes = useStyles();

  return(
    <div className={classes.root} >
      <CssBaseline />
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
  );

}

export default App;