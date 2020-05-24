import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AudioPlayer from '../components/audioplayer/AudioPlayer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Sample Data Needed
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Rec001
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <AudioPlayer src="/real/anwr/31/2019/SINP-10_20190601_064602_010000_000100.flac"/>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image=""
        title="Rec001"
      />
    </Card>
  );
}
/*
  Load the file from the backend into the src.
  Load Img Src As WEll from the backend.
*/