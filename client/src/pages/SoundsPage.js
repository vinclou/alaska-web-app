import React from 'react';
import MediaCard from '../components/MediaCard';
import SearchBar from '../components/SearchBar';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Footer } from '../components/Footer';


const useStyles = makeStyles((theme) => ({
  content: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    width: '100%',
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'column',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const SoundsPage = () => {

    const classes = useStyles();

    return (
      <React.Fragment>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">

            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Alaska Wilderness
            </Typography>

            <div className={classes.heroButtons}>
              <SearchBar/>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}

          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={6} >
                <MediaCard/>
              </Grid>
            ))}
          </Grid>

        </Container>
      </main>
      <Footer/>
    </React.Fragment>
    );
}