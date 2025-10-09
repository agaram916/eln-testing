// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'The Best Electronic Lab Software for Labs of All Sizes - Logilab ELN',
  description: 'Elektronisches Laborjournal für chemische Forschung, Biotechnologie und Pharmaunternehmen in Deutschland mit GMP und 21 cfr part 11 Konformität. ',
  openGraph: {
    title: 'The Best Electronic Lab Software for Labs of All Sizes - Logilab ELN',
    description: 'Elektronisches Laborjournal für chemische Forschung, Biotechnologie und Pharmaunternehmen in Deutschland mit GMP und 21 cfr part 11 Konformität. ',
    url: 'https://www.logilabeln.com/solution', 
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
    title: 'The Best Electronic Lab Software for Labs of All Sizes - Logilab ELN',
    description: 'Elektronisches Laborjournal für chemische Forschung, Biotechnologie und Pharmaunternehmen in Deutschland mit GMP und 21 cfr part 11 Konformität. ',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Elektronisches Laborjournal für chemische Forschung, Biotechnologie und Pharmaunternehmen in Deutschland mit GMP und 21 cfr part 11 Konformität.  " />
        <meta property="og:title" content="The Best Electronic Lab Software for Labs of All Sizes - Logilab ELN" />
        <meta property="og:description" content="Elektronisches Laborjournal für chemische Forschung, Biotechnologie und Pharmaunternehmen in Deutschland mit GMP und 21 cfr part 11 Konformität." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/solution" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="The Best Electronic Lab Software for Labs of All Sizes - Logilab ELN" />
        <meta property="twitter:description" content="Elektronisches Laborjournal für chemische Forschung, Biotechnologie und Pharmaunternehmen in Deutschland mit GMP und 21 cfr part 11 Konformität. " />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
