// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Agaram Technoogies Terms & Conditions ',
  description: "Review Agaram Technologies' terms and conditions to understand the policies governing the use of our lab informatics software products and services.",
  openGraph: {
    title: 'Agaram Technoogies Terms & Conditionsies',
    description: "Review Agaram Technologies' terms and conditions to understand the policies governing the use of our lab informatics software products and services.",
    url: 'https://www.logilabeln.com/company/terms-conditions', 
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
    title: 'Agaram Technoogies Terms & Conditions',
    description: "Review Agaram Technologies' terms and conditions to understand the policies governing the use of our lab informatics software products and services.",
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },

};

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Review Agaram Technologies' terms and conditions to understand the policies governing the use of our lab informatics software products and services." />
        <meta property="og:title" content="Agaram Technoogies Terms & Conditions" />
        <meta property="og:description" content="Review Agaram Technologies' terms and conditions to understand the policies governing the use of our lab informatics software products and services." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/company/terms-conditions" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Agaram Technoogies Terms & Conditions" />
        <meta property="twitter:description" content="Review Agaram Technologies' terms and conditions to understand the policies governing the use of our lab informatics software products and services." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
