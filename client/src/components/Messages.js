import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../components/Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Messages:</Title>
      <Typography component="p" variant="h6">
        There are no messages left
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
         { new Date().toLocaleString() }
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Messages and reminders on Slack
        </Link>
      </div>
    </React.Fragment>
  );
}