import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center'
  },
  title: {
  }
}));

function Challange1() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Challange 1</h1>
    </div>
  );
}

export default Challange1;
