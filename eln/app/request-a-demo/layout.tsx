// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Request a Demo - Experience Logilab ELN in Action',
  description: 'Request a demo of Logilab ELN from Agaram Technologies and discover how we can help you get closer to your breakthroughs.',
  openGraph: {
    title: 'Request a Demo - Experience Logilab ELN in Action',
    description: 'Request a demo of Logilab ELN from Agaram Technologies and discover how we can help you get closer to your breakthroughs.',
    url: 'https://www.logilabeln.com/request-a-demo', 
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
    title: 'Request a Demo - Experience Logilab ELN in Action',
    description: 'Request a demo of Logilab ELN from Agaram Technologies and discover how we can help you get closer to your breakthroughs.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Request a demo of Logilab Digital Lab Notebook and discover how we can help you get closer to your breakthroughs.." />
        <meta property="og:title" content="Request a Demo - Experience Logilab ELN in Action" />
        <meta property="og:description" content="Request a demo of Logilab Digital Lab Notebook and discover how we can help you get closer to your breakthroughs." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/request-a-demo" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Request a Demo - Experience Logilab ELN in Actions" />
        <meta property="twitter:description" content="Request a demo of Logilab Digital Lab Notebook and discover how we can help you get closer to your breakthroughs." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
