import Head from 'next/head'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import JSArticle from '../component/JSArticle.js';
import NavBar from '../component/NavBar.js';

// MUI Import
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Assignment 2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar title="Assignment 2"/>
        <Container maxWidth="md">
          <Box>
            <Typography variant="h2" component="h2" color="primary" align="center">Assignment 2 - React Components and Styling</Typography>
            <Typography variant="subtitle1" color="secondary" align="center">Here's a list of awesome resources that you can use</Typography>
            <JSArticle/>
          </Box>
        </Container>
      </main>
    </div>
  )
}
