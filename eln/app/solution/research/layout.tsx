// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Empower Tomorrow’s Research Today with Digital Lab Notebook - Logilab ELN',
  description: 'ELN voor laboratorium onderzoek in Nederland — gedrag projectmanagement, monsters beheren en voldoen aan wettelijke vereisten',
  openGraph: {
    title: 'Empower Tomorrow’s Research Today with Digital Lab Notebook - Logilab ELN',
    description: 'ELN voor laboratorium onderzoek in Nederland — gedrag projectmanagement, monsters beheren en voldoen aan wettelijke vereisten',
    url: 'https://www.logilabeln.com//solution/research', 
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
    title: 'Empower Tomorrow’s Research Today with Digital Lab Notebook - Logilab ELN',
    description: 'ELN voor laboratorium onderzoek in Nederland — gedrag projectmanagement, monsters beheren en voldoen aan wettelijke vereisten',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="ELN voor laboratorium onderzoek in Nederland — gedrag projectmanagement, monsters beheren en voldoen aan wettelijke vereisten" />
        <meta property="og:title" content="Empower Tomorrow’s Research Today with Digital Lab Notebook - Logilab ELN" />
        <meta property="og:description" content="ELN voor laboratorium onderzoek in Nederland — gedrag projectmanagement, monsters beheren en voldoen aan wettelijke vereisten" />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com//solution/research" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Empower Tomorrow’s Research Today with Digital Lab Notebook - Logilab ELN" />
        <meta property="twitter:description" content="ELN voor laboratorium onderzoek in Nederland — gedrag projectmanagement, monsters beheren en voldoen aan wettelijke vereisten." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
