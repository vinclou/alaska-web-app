import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Chart from '../components/Chart';
import Messages from '../components/Messages';
import Uploads from '../components/Uploads';
import FileExplorer from '../components/FileExplorer';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Alaska Browse All Rights Are Reserved Under MIT License
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({

    content: {
      display: 'flex',
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
}));

export const DashboardPage = () => {

    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className = {classes.root}>
      <main className={classes.content}>
        <CssBaseline />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Messages */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Messages />
              </Paper>
            </Grid>
            {/* Recent Uploads */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Uploads />
              </Paper>
            </Grid>
            {/*File Explorer*/}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <FileExplorer />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>

      </main>
      </div>
    );
}
