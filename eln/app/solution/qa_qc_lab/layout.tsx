// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Logilab ELN for QA & QC Labs: Error-Free Quality Testing',
  description: 'Streamline research data on all levels of quality testing with cloud-based electronic laboratory notebooks designed for modern scientific teams',
  openGraph: {
    title: 'Logilab ELN for QA & QC Labs: Error-Free Quality Testing',
    description: 'Streamline research data on all levels of quality testing with cloud-based electronic laboratory notebooks designed for modern scientific teams',
    url: 'https://www.logilabeln.com/solution/qa_qc_lab', 
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
    title: 'Logilab ELN for QA & QC Labs: Error-Free Quality Testing',
    description: 'Streamline research data on all levels of quality testing with cloud-based electronic laboratory notebooks designed for modern scientific teams',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Streamline research data on all levels of quality testing with cloud-based electronic laboratory notebooks designed for modern scientific teams" />
        <meta property="og:title" content="Logilab ELN for QA & QC Labs: Error-Free Quality Testing" />
        <meta property="og:description" content="Streamline research data on all levels of quality testing with cloud-based electronic laboratory notebooks designed for modern scientific teams" />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/solution/qa_qc_lab" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Logilab ELN for QA & QC Labs: Error-Free Quality Testing" />
        <meta property="twitter:description" content="Streamline research data on all levels of quality testing with cloud-based electronic laboratory notebooks designed for modern scientific teams" />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
