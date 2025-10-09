// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Our Customers - Trusted by Leading Labs Worldwid',
  description: 'Discover how leading organizations trust Agaram Technologies robust LIMS, ELN, and SDMS solutions to enhance their research experience.',
  openGraph: {
    title: 'Our Customers - Trusted by Leading Labs Worldwid',
    description: 'Discover how leading organizations trust Agaram Technologies robust LIMS, ELN, and SDMS solutions to enhance their research experience.',
    url: 'https://www.logilabeln.com/company/customers', 
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
    title: 'Our Customers - Trusted by Leading Labs Worldwid',
    description: 'Discover how leading organizations trust Agaram Technologies robust LIMS, ELN, and SDMS solutions to enhance their research experience.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },

};

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Discover how leading organizations trust Agaram Technologies robust LIMS, ELN, and SDMS solutions to enhance their research experience." />
        <meta property="og:title" content="Our Customers - Trusted by Leading Labs Worldwid" />
        <meta property="og:description" content="Discover how leading organizations trust Agaram Technologies robust LIMS, ELN, and SDMS solutions to enhance their research experience." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/company/customers" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Our Customers - Trusted by Leading Labs Worldwid" />
        <meta property="twitter:description" content="Discover how leading organizations trust Agaram Technologies robust LIMS, ELN, and SDMS solutions to enhance their research experience." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
