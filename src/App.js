import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage       from './components/HomePage';
import Challange1     from './components/Challange1';
import Challange2     from './components/Challange2';
import Challange3     from './components/Challange3';
import Challange4     from './components/Challange4';
import ChallangeBonus from './components/ChallangeBonus';

const useStyles = makeStyles((theme) => ({
  title: {
  },
  subtitle: {
    paddingLeft: 20
  },
  fillBox: {
    flexGrow: 1
  },
  toolbarlink: {
    textDecoration: 'none',
    color: 'white'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link className={classes.toolbarlink} to="/">Red Matter's code challange</Link>
          </Typography>
          <Typography variant="h7" className={classes.subtitle}>
            by Renato Britto
          </Typography>
          <div className={classes.fillBox}/>
          <Button color="inherit"><Link className={classes.toolbarlink} 
            to="/challange_1">Challange 1</Link></Button>
          <Typography>•</Typography>
          <Button color="inherit"><Link className={classes.toolbarlink} 
            to="/challange_2">Challange 2</Link></Button>
          <Typography>•</Typography>
          <Button color="inherit"><Link className={classes.toolbarlink} 
            to="/challange_3">Challange 3</Link></Button>
          <Typography>•</Typography>
          <Button color="inherit"><Link className={classes.toolbarlink} 
            to="/challange_4">Challange 4</Link></Button>
          <Typography>•</Typography>
          <Button color="inherit"><Link className={classes.toolbarlink} 
            to="/challange_bonus">Challange Bonus</Link></Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/challange_1">
          <Challange1 />
        </Route>
        <Route path="/challange_2">
          <Challange2 />
        </Route>
        <Route path="/challange_3">
          <Challange3 />
        </Route>
        <Route path="/challange_4">
          <Challange4 />
        </Route>
        <Route path="/challange_bonus">
          <ChallangeBonus />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
