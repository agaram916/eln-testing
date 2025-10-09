// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "ELN Software for Collaboration & Team Management | Lab Workflow & Research Project Management ",
  description: '',
  openGraph: {
    title: "ELN Software for Collaboration & Team Management | Lab Workflow & Research Project Management ",
    description: 'Contact Agaram Technologies for all of your laboratory software needs, support, inquiries',
    url: 'https://www.logilabeln.com/contact-us', 
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
    title: "ELN Software for Collaboration & Team Management | Lab Workflow & Research Project Management ",
    description: '',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const Collaboration = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <meta property="og:title" content="ELN Software for Collaboration & Team Management | Lab Workflow & Research Project Management " />
        <meta property="og:description" content=" " />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/contact-us" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="ELN Software for Collaboration & Team Management | Lab Workflow & Research Project Management " />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Collaboration;
