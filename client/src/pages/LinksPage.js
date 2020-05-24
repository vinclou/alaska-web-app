import React from 'react';
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FormDialog from "../components/FormDialog";


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

const posts = {
  title: 'Sample blog post',
  date: 'April 1, 2020',
  author: 'by [Olivier]',
  description: "Multiple lines of text that form the blog, informing new readers quickly and efficiently about what's recent post"
}


export function LinksPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} /> 
        </main>
        <h3> {posts.title} </h3>
        <h6>{posts.date} {" " + posts.author}</h6>
        <p>{posts.description} </p>
       </Container>

      <FormDialog />
    </React.Fragment>
  );
}

export default LinksPage;