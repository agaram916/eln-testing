// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Logilab ELN Software Downloads: Brochures & Guides',
  description: 'Access our resource library to download brochures and product guides for Logilab Electric Lab Notebook.',

  openGraph: {
    title: 'Logilab ELN Software Downloads: Brochures & Guidess',
    description: 'Access our resource library to download brochures and product guides for Logilab Electric Lab Notebook.',
    url: 'https://www.logilabeln.com/resource/download', 
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
    title: 'Logilab ELN Software Downloads: Brochures & Guides',
    description: 'Access our resource library to download brochures and product guides for Logilab Electric Lab Notebook.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Access our resource library to download brochures and product guides for Logilab Electric Lab Notebook." />
        <meta property="og:title" content="Logilab ELN Software Downloads: Brochures & Guides" />
        <meta property="og:description" content="Access our resource library to download brochures and product guides for Logilab Electric Lab Notebook." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/resource/download" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Logilab ELN Software Downloads: Brochures & Guides" />
        <meta property="twitter:description" content="Access our resource library to download brochures and product guides for Logilab Electric Lab Notebook." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
