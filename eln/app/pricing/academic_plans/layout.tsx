// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Logilab ELN Pricing-Affordable, Robust Electronic Lab Notebook for Academics',
  description: 'Record research, manage data, and collaborate on this budget-friendly cloud-based digital lab notebook ',
  openGraph: {
    title: 'Logilab ELN Pricing-Affordable, Robust Electronic Lab Notebook for Academics',
    description: 'Record research, manage data, and collaborate on this budget-friendly cloud-based digital lab notebook ',
    url: 'https://www.logilabeln.com/pricing', 
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
    title: 'Logilab ELN Pricing-Affordable, Robust Electronic Lab Notebook for Academics',
    description: 'Record research, manage data, and collaborate on this budget-friendly cloud-based digital lab notebook ',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Record research, manage data, and collaborate on this budget-friendly cloud-based digital lab notebook " />
        <meta property="og:title" content="Affordable, Robust Electronic Lab Notebook for Academics - Logilab ELN" />
        <meta property="og:description" content="Record research, manage data, and collaborate on this budget-friendly cloud-based digital lab notebook " />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/pricing" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Affordable, Robust Electronic Lab Notebook for Academics - Logilab ELN" />
        <meta property="twitter:description" content="Record research, manage data, and collaborate on this budget-friendly cloud-based digital lab notebook " />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
