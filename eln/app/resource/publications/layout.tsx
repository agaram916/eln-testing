// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Logilab Electronic Lab Notebook (ELN) Publications',
  description: 'Discover our publications featuring research papers, case studies, and whitepapers on lab automation, data management, and compliance. Find out how Logilab ELN speeds up your research.',
  openGraph: {
    title: 'Logilab Electronic Lab Notebook (ELN) Publications',
    description: 'Discover our publications featuring research papers, case studies, and whitepapers on lab automation, data management, and compliance. Find out how Logilab ELN speeds up your research.',
    url: 'https://www.logilabeln.com//solution/academics', 
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
    title: 'Logilab Electronic Lab Notebook (ELN) Publications',
    description: 'Discover our publications featuring research papers, case studies, and whitepapers on lab automation, data management, and compliance. Find out how Logilab ELN speeds up your research.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Discover our publications featuring research papers, case studies, and whitepapers on lab automation, data management, and compliance. Find out how Logilab ELN speeds up your research.s"/>
        <meta property="og:title" content="Logilab Electronic Lab Notebook (ELN) Publications" />
        <meta property="og:description" content="Discover our publications featuring research papers, case studies, and whitepapers on lab automation, data management, and compliance. Find out how Logilab ELN speeds up your research." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com//solution/academics" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Logilab Electronic Lab Notebook (ELN) Publications" />
        <meta property="twitter:description" content="Discover our publications featuring research papers, case studies, and whitepapers on lab automation, data management, and compliance. Find out how Logilab ELN speeds up your research." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
