import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Button from '../components/material/Button';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        'Web',
        'Design',
        'Development',
        'Progressive',
        'App',
        'Performance',
        'Accessibility',
        'SEO',
        '508 compliance',
      ]}
      description="This is the home page."
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button href="/page-2/">Go to page 2</Button>
  </Layout>
);

export default IndexPage;
