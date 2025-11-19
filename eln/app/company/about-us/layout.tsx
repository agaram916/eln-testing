// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'About Agaram Technologies: Your Lab Solutions Expert',
  description: 'Agaram Technologies’ enterprise labs digital solutions are globally recognized for delivering impactful results across various industries.',
  openGraph: {
    title: 'About Agaram Technologies: Your Lab Solutions Expert',
    description: 'Agaram Technologies’ enterprise labs digital solutions are globally recognized for delivering impactful results across various industries.',
    url: 'https://www.logilabeln.com/company/about-us', 
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
    title: 'About Agaram Technologies: Your Lab Solutions Expert',
    description: 'Agaram Technologies’ enterprise labs digital solutions are globally recognized for delivering impactful results across various industries.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Agaram Technologies’ enterprise labs digital solutions are globally recognized for delivering impactful results across various industries." />
        <meta property="og:title" content="About Agaram Technologies: Your Lab Solutions Expert" />
        <meta property="og:description" content="Agaram Technologies’ enterprise labs digital solutions are globally recognized for delivering impactful results across various industries." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/company/about-us" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="About Agaram Technologies: Your Lab Solutions Expert" />
        <meta property="twitter:description" content="Agaram Technologies’ enterprise labs digital solutions are globally recognized for delivering impactful results across various industries." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
