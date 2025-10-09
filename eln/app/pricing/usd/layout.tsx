// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Electronic Lab Notebook Software with the best ROI of 9x -12x - Logilab ELN ',
  description: 'Logilab ELN pricing for individual, team and enterprise plans. Prices for organizations of all sizes — get access to powerful features for lab data management, inventory tracking and more',
  openGraph: {
    title: 'Electronic Lab Notebook Software with the best ROI of 9x -12x - Logilab ELN',
    description: 'Logilab ELN pricing for individual, team and enterprise plans. Prices for organizations of all sizes — get access to powerful features for lab data management, inventory tracking and more',
    url: 'https://www.logilabeln.com/pricing', 
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
    title: 'Electronic Lab Notebook Software with the best ROI of 9x -12x - Logilab ELN',
    description: 'Logilab ELN pricing for individual, team and enterprise plans. Prices for organizations of all sizes — get access to powerful features for lab data management, inventory tracking and more.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Logilab ELN pricing for individual, team and enterprise plans. Prices for organizations of all sizes — get access to powerful features for lab data management, inventory tracking and more" />
        <meta property="og:title" content="Electronic Lab Notebook Software with the best ROI of 9x -12x - Logilab ELNe" />
        <meta property="og:description" content="Learn more about our company." />
        <meta property="og:image" content="http://5.189.171.17:9095/elnwebsitenext/assets/images/Logilab-ELN_white.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Electronic Lab Notebook Software with the best ROI of 9x -12x - Logilab ELN" />
        <meta property="twitter:description" content="Logilab ELN pricing for individual, team and enterprise plans. Prices for organizations of all sizes — get access to powerful features for lab data management, inventory tracking and more" />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg "/>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
