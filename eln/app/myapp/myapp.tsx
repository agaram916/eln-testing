// pages/_app.tsx
"use client"
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import 'animate.css/animate.min.css'; // Import animate.css for animations
import '../styles/globals.css'; // Import your global CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WOW = require('wowjs').WOW;
      new WOW({
        live: false,
      }).init();
    }
  }, []);

  // Render the active page component with its props
  return <Component {...pageProps} />;
}

export default MyApp;
