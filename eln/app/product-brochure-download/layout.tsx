// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Product Brochures | ELN | Logilab ELN | Agaram Technologies',
  description: 'Gain valuable insights with Agaram Technologies’ Logilab ELN brochures. Learn about our Electronic Lab Notebook and how our solution can elevate your laboratory’s operations.',
  openGraph: {
    title: 'About Us | My Website',
    description: 'Gain valuable insights with Agaram Technologies’ Logilab ELN brochures. Learn about our Electronic Lab Notebook and how our solution can elevate your laboratory’s operations.',
    url: 'https://www.logilabeln.com/product-brochure-download/', 
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
    title: 'Product Brochures | ELN | Logilab ELN | Agaram Technologies',
    description: 'Gain valuable insights with Agaram Technologies’ Logilab ELN brochures. Learn about our Electronic Lab Notebook and how our solution can elevate your laboratory’s operations.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Gain valuable insights with Agaram Technologies’ Logilab ELN brochures. Learn about our Electronic Lab Notebook and how our solution can elevate your laboratory’s operations." />
        <meta property="og:title" content="Product Brochures | ELN | Logilab ELN | Agaram Technologies" />
        <meta property="og:description" content="Gain valuable insights with Agaram Technologies’ Logilab ELN brochures. Learn about our Electronic Lab Notebook and how our solution can elevate your laboratory’s operations." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/product-brochure-download/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Gain valuable insights with Agaram Technologies’ Logilab ELN brochures. Learn about our Electronic Lab Notebook and how our solution can elevate your laboratory’s operations." />
        <meta property="twitter:description" content="Gain valuable insights with Agaram Technologies’ Logilab ELN brochures. Learn about our Electronic Lab Notebook and how our solution can elevate your laboratory’s operations." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
