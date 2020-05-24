import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from '../components/MainFeaturedPost';
import Main from '../components/Main';
import Aside from '../components/Aside';

import { Footer } from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'Title',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://www.outsideonline.com/sites/default/files/styles/full-page/public/2018/12/20/alaska-warming-paxson-woelber_h.jpg?itok=9j6mQSUk',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const post_one = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis lectus odio, non egestas arcu euismod a. Praesent condimentum felis sit amet lectus facilisis, sit amet vehicula velit porta. Morbi quis porttitor risus. Maecenas et justo mi. Maecenas a urna massa. Vestibulum sed mollis sem. Etiam vel est mi. Donec nec venenatis nisl. Curabitur rhoncus risus mi, nec suscipit dolor finibus in. Nunc sagittis justo tellus, vel venenatis lacus egestas ut. Suspendisse rhoncus augue nec mauris volutpat, eget tincidunt massa fringilla. Ut at velit sed est vestibulum fermentum. Nullam suscipit elit nunc, vel interdum dui pretium ut. Ut vitae turpis in mauris maximus dictum. Ut libero nunc, commodo eu bibendum tempus, sodales a ante.";
const post_two = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis lectus odio, non egestas arcu euismod a. Praesent condimentum felis sit amet lectus facilisis, sit amet vehicula velit porta. Morbi quis porttitor risus. Maecenas et justo mi. Maecenas a urna massa. Vestibulum sed mollis sem. Etiam vel est mi. Donec nec venenatis nisl. Curabitur rhoncus risus mi, nec suscipit dolor finibus in. Nunc sagittis justo tellus, vel venenatis lacus egestas ut. Suspendisse rhoncus augue nec mauris volutpat, eget tincidunt massa fringilla. Ut at velit sed est vestibulum fermentum. Nullam suscipit elit nunc, vel interdum dui pretium ut. Ut vitae turpis in mauris maximus dictum. Ut libero nunc, commodo eu bibendum tempus, sodales a ante.";
const post_thr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis lectus odio, non egestas arcu euismod a. Praesent condimentum felis sit amet lectus facilisis, sit amet vehicula velit porta. Morbi quis porttitor risus. Maecenas et justo mi. Maecenas a urna massa. Vestibulum sed mollis sem. Etiam vel est mi. Donec nec venenatis nisl. Curabitur rhoncus risus mi, nec suscipit dolor finibus in. Nunc sagittis justo tellus, vel venenatis lacus egestas ut. Suspendisse rhoncus augue nec mauris volutpat, eget tincidunt massa fringilla. Ut at velit sed est vestibulum fermentum. Nullam suscipit elit nunc, vel interdum dui pretium ut. Ut vitae turpis in mauris maximus dictum. Ut libero nunc, commodo eu bibendum tempus, sodales a ante.";
const post_for = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis lectus odio, non egestas arcu euismod a. Praesent condimentum felis sit amet lectus facilisis, sit amet vehicula velit porta. Morbi quis porttitor risus. Maecenas et justo mi. Maecenas a urna massa. Vestibulum sed mollis sem. Etiam vel est mi. Donec nec venenatis nisl. Curabitur rhoncus risus mi, nec suscipit dolor finibus in. Nunc sagittis justo tellus, vel venenatis lacus egestas ut. Suspendisse rhoncus augue nec mauris volutpat, eget tincidunt massa fringilla. Ut at velit sed est vestibulum fermentum. Nullam suscipit elit nunc, vel interdum dui pretium ut. Ut vitae turpis in mauris maximus dictum. Ut libero nunc, commodo eu bibendum tempus, sodales a ante.";

const posts = [post_one, post_two, post_thr, post_for];

const aside = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 2020', url: '#' },
    { title: 'October 2020', url: '#' },
    { title: 'September 2019', url: '#' },
    { title: 'August 2019', url: '#' },
    { title: 'July 2019', url: '#' },
    { title: 'June 2019', url: '#' },
    { title: 'May 2019', url: '#' },
    { title: 'April 2019', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};




export function LinksPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Our Mission" posts={posts} />

            <Aside
              title={aside.title}
              description={aside.description}
              archives={aside.archives}
              social={aside.social}
            />

          </Grid>

        </main>
        <Footer/>
      </Container>

    </React.Fragment>
  );
}

export default LinksPage;