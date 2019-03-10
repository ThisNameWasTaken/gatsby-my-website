import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/material/Button';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" description="This is the second page." />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Button href="/">Go back to the homepage</Button>
  </Layout>
);

export default SecondPage;
