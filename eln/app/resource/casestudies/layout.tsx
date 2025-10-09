// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Resources | Casestudies| ELN | Logilab ELN | Agaram Technologies',
  description: 'Explore casestudies about  Agaram’s  Logilab ELN. Stay updated with the latest trends and insights.',
  openGraph: {
    title: 'Resources | Casestudies| ELN | Logilab ELN | Agaram Technologies',
    description: 'Explore casestudies about  Agaram’s  Logilab ELN. Stay updated with the latest trends and insights.',
    url: 'https://www.logilabeln.com/casestudy-download', 
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
    title: 'Resources | Casestudies| ELN | Logilab ELN | Agaram Technologies',
    description: 'Explore casestudies about  Agaram’s  Logilab ELN. Stay updated with the latest trends and insights.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Explore casestudies about  Agaram’s  Logilab ELN. Stay updated with the latest trends and insights." />
        <meta property="og:title" content="Resources | Casestudies| ELN | Logilab ELN | Agaram Technologies" />
        <meta property="og:description" content="Explore casestudies about  Agaram’s  Logilab ELN. Stay updated with the latest trends and insights." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/casestudy-download" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Resources | Casestudies| ELN | Logilab ELN | Agaram Technologies" />
        <meta property="twitter:description" content="Explore casestudies about  Agaram’s  Logilab ELN. Stay updated with the latest trends and insights." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
