// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Contact Us - Let's Get in Touch!",
  description: 'Contact Agaram Technologies for all of your laboratory software needs, support, inquiries',
  openGraph: {
    title: "Contact Us - Let's Get in Touch!",
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
    title: "Contact Us - Let's Get in Touch!",
    description: 'Contact Agaram Technologies for all of your laboratory software needs, support, inquiries',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Contact Agaram Technologies for all of your laboratory software needs, support, inquiries," />
        <meta property="og:title" content="Contact Us - Let's Get in Touch!" />
        <meta property="og:description" content="Contact Agaram Technologies for all of your laboratory software needs, support, inquiries " />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/contact-us" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Contact Us - Let's Get in Touch!" />
        <meta property="twitter:description" content="Contact Agaram Technologies for all of your laboratory software needs, support, inquiries" />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
