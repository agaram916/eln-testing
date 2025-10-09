// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "ELN for Project & Task Management | Research Workflow Management | Lab Project Planning ",
  description: 'Plan, assign, and monitor research projects with structured task allocation, real-time progress tracking, and workflow visualization—ensuring collaboration, compliance, and timely execution across teams.',
  openGraph: {
    title: "ELN for Project & Task Management | Research Workflow Management | Lab Project Planning  ",
    description: 'Plan, assign, and monitor research projects with structured task allocation, real-time progress tracking, and workflow visualization—ensuring collaboration, compliance, and timely execution across teams.',
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
    title: "ELN for Project & Task Management | Research Workflow Management | Lab Project Planning",
    description: 'Plan, assign, and monitor research projects with structured task allocation, real-time progress tracking, and workflow visualization—ensuring collaboration, compliance, and timely execution across teams.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const Collaboration = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <meta property="og:title" content="ELN for Project & Task Management | Research Workflow Management | Lab Project Planning" />
        <meta property="og:description" content=" " />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/contact-us" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="ELN for Project & Task Management | Research Workflow Management | Lab Project Planning" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Collaboration;
