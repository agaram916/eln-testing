// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Achieve Lab Regulatory Compliance with Logilab ELN',
  description: 'Répondre aux exigences de conformité 21 CFR Part 11, CGMP, ALCOA, data integrity, etc. avec cahier de laboratoire électronique ',
  openGraph: {
    title: 'Achieve Lab Regulatory Compliance with Logilab ELN',
    description: 'Répondre aux exigences de conformité 21 CFR Part 11, CGMP, ALCOA, data integrity, etc. avec cahier de laboratoire électronique ',
    url: 'https://www.logilabeln.com//solution/integrity', 
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
    title: 'Achieve Lab Regulatory Compliance with Logilab ELN',
    description: 'Répondre aux exigences de conformité 21 CFR Part 11, CGMP, ALCOA, data integrity, etc. avec cahier de laboratoire électronique ',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Répondre aux exigences de conformité 21 CFR Part 11, CGMP, ALCOA, data integrity, etc. avec cahier de laboratoire électronique" />
        <meta property="og:title" content="Achieve Lab Regulatory Compliance with Logilab ELN" />
        <meta property="og:description" content="Répondre aux exigences de conformité 21 CFR Part 11, CGMP, ALCOA, data integrity, etc. avec cahier de laboratoire électronique " />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com//solution/integrity" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Achieve Lab Regulatory Compliance with Logilab ELN" />
        <meta property="twitter:description" content="Répondre aux exigences de conformité 21 CFR Part 11, CGMP, ALCOA, data integrity, etc. avec cahier de laboratoire électronique ." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
