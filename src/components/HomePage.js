import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center'
  },
  title: {
  },
  subtitle: {
  },
  toolbarlink: {
    textDecoration: 'none',
    backgroundColor: '#e5e5e5',
    borderRadius: 5,
    borderColor: '#222',
    padding: 10,
    color: '#2222ee',
    fontSize: 17,
    margin: 15
  },
  content: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 50
  }
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.header}>
        <h1 className={classes.title}>Welcome to my submission</h1>
        <p className={classes.subtitle}>
          Click on the links below to go to each challange,
          <br/>
          <a href="https://docs.google.com/document/d/1hnVNLmUS2TiQBf7j8fGK1gwb7YgGkFfgqOpyNZFMM-c/edit?ts=602c2855">
            as requested here
          </a>
        </p>
      </div>
      <div className={classes.content}>
        <Link className={classes.toolbarlink} 
          to="/challange_1">Challange 1</Link>
        
        <Link className={classes.toolbarlink} 
          to="/challange_2">Challange 2</Link>
        
        <Link className={classes.toolbarlink} 
          to="/challange_3">Challange 3</Link>
        
        <Link className={classes.toolbarlink} 
          to="/challange_4">Challange 4</Link>
        
        <Link className={classes.toolbarlink} 
          to="/challange_bonus">Challange Bonus</Link>
      </div>
    </div>
  );
}

export default HomePage;
