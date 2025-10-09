// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'ISO 9001 : 2015 | ISO 27001:2022| Nasscom | Quality Management | Quality Compliance',
  description: 'Agaram Technologies’ is accredited with quality certifications such as ISO 9001:2015 and ISO 27001:2022, we\'re also a NASSCOM member.',
  openGraph: {
    title: 'ISO 9001 : 2015 | ISO 27001:2022| Nasscom | Quality Management | Quality Compliance',
    description: 'Agaram Technologies’ is accredited with quality certifications such as ISO 9001:2015 and ISO 27001:2022, we\'re also a NASSCOM member.',
    url: 'https://www.logilabeln.com//company/certifications', 
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
    title: 'ISO 9001 : 2015 | ISO 27001:2022| Nasscom | Quality Management | Quality Compliance',
    description: 'Agaram Technologies’ is accredited with quality certifications such as ISO 9001:2015 and ISO 27001:2022, we\'re also a NASSCOM member.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Agaram Technologies’ is accredited with quality certifications such as ISO 9001:2015 and ISO 27001:2022, we\'re also a NASSCOM member." />
        <meta property="og:title" content="ISO 9001 : 2015 | ISO 27001:2022| Nasscom | Quality Management | Quality Compliance" />
        <meta property="og:description" content="Agaram Technologies’ is accredited with quality certifications such as ISO 9001:2015 and ISO 27001:2022, we\'re also a NASSCOM member." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com//company/certifications" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="ISO 9001 : 2015 | ISO 27001:2022| Nasscom | Quality Management | Quality Compliance" />
        <meta property="twitter:description" content="Agaram Technologies’ is accredited with quality certifications such as ISO 9001:2015 and ISO 27001:2022, we\'re also a NASSCOM member." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
