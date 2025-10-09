// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'FAQs - Logilab ELN',
  description: 'Browse our FAQ page to find answers to common queries about Logilab ELN features, subscription, and technical support.',

  openGraph: {
    title: 'FAQs - Logilab ELN',
    description: 'Browse our FAQ page to find answers to common queries about Logilab ELN features, subscription, and technical support.',
    url: 'https://www.logilabeln.com/resource/faq', 
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
    title: 'FAQs - Logilab ELN',
    description: 'Browse our FAQ page to find answers to common queries about Logilab ELN features, subscription, and technical support.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Browse our FAQ page to find answers to common queries about Logilab ELN features, subscription, and technical support." />
        <meta property="og:title" content="FAQs - Logilab ELN" />
        <meta property="og:description" content="Browse our FAQ page to find answers to common queries about Logilab ELN features, subscription, and technical support.." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/resource/faq" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="FAQs - Logilab ELN" />
        <meta property="twitter:description" content="Browse our FAQ page to find answers to common queries about Logilab ELN features, subscription, and technical support." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
