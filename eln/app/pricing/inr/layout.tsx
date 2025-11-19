// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Logilab ELN | Affordable, Robust Electronic Lab Notebook | ROI of 9x -15x ',
  description: 'Explore Logilab ELN’s pricing plans and their features to choose the best one for your team!',
  openGraph: {
    title: 'About Us | My Website',
    description: 'Learn more about our company.',
    url: 'http://5.189.171.17:9095/elnwebsitenext/about', 
    images: [
      {
        url: 'http://5.189.171.17:9095/elnwebsitenext/opengrap-image.png', 
        width: 1200,
        height: 630,
        alt: 'About Us Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | My Website',
    description: 'Learn more about our company.',
    images: ['http://5.189.171.17:9095/elnwebsitenext/opengrap-image.png'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Learn more about our company." />
        <meta property="og:title" content="About Us | My Website" />
        <meta property="og:description" content="Learn more about our company." />
        <meta property="og:image" content="http://5.189.171.17:9095/elnwebsitenext/opengrap-image.png" />
        <meta property="og:url" content="http://5.189.171.17:9095/elnwebsitenext/about" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="About Us | My Website" />
        <meta property="twitter:description" content="Learn more about our company." />
        <meta property="twitter:image" content="http://5.189.171.17:9095/elnwebsitenext/opengrap-image.png" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
