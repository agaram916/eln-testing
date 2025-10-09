// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Free Electronic Lab Notebook for Academics - Logilab ELN',
  description: 'Enhance lab productivity — efficient research data mangement with free eln software for 30 days',
  openGraph: {
    title: 'Free Electronic Lab Notebook for Academics - Logilab ELN',
    description: 'Enhance lab productivity — efficient research data mangement with free eln software for 30 days.',
    url: 'https://www.logilabeln.com//solution/academics', 
    images: [
      {
        url: 'https://www.logilabeln.com/assets/images/eln_logo.svg', 
        width: 1200,
        height: 630,
        alt: 'About Us Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Electronic Lab Notebook for Academics - Logilab ELN',
    description: 'Enhance lab productivity — efficient research data mangement with free eln software for 30 days',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Enhance lab productivity — efficient research data mangement with free eln software for 30 days"/>
        <meta property="og:title" content="Free Electronic Lab Notebook for Academics - Logilab ELN" />
        <meta property="og:description" content="Enhance lab productivity — efficient research data mangement with free eln software for 30 days" />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com//solution/academics" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Free Electronic Lab Notebook for Academics - Logilab ELN" />
        <meta property="twitter:description" content="Enhance lab productivity — efficient research data mangement with free eln software for 30 days" />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
