'use client';
// old one
// import { useState } from 'react';

// export default function DownloadPage() {
//     const [isLoading, setIsLoading] = useState(false);
//     const [downloadLink, setDownloadLink] = useState<string | null>(null);

//     const handleDownloadClick = async () => {
//         setIsLoading(true);
        
//         try {
//             const res = await fetch('http://localhost:3000/apply/downloadpdf');
//             console.log('Fetching from:', '/apply/downloadpdf');
//             console.log('Fetch Response:', res); // Log the entire response for debugging
            
//             if (!res.ok) {
//                 throw new Error(`Error fetching PDF: ${res.statusText}`);
//             }

//             const data = await res.json();
//             setDownloadLink(data.pdfUrl);
//         } catch (error) {
//             console.error('Error fetching the PDF:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div>
//             <button onClick={handleDownloadClick} disabled={isLoading}>
//                 {isLoading ? 'Fetching PDF...' : 'Click Here To Download'}
//             </button>
            
//             {downloadLink && (
//                 <a href={downloadLink} download target="_blank" rel="noopener noreferrer">
//                     Download PDF
//                 </a>
//             )}
//         </div>
//     );
// }


// import React from 'react';

// const DownloadPDF = () => {
//   const handleDownload = async () => {
//     const response = await fetch('/api/download-pdf'); // Replace with your API endpoint
//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);

//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'your-file.pdf';
//     link.click();
//     window.URL.revokeObjectURL(url);
//   };

//   return (
//     <button onClick={handleDownload}>Download PDF</button>
//   );
// };

// export default DownloadPDF;


// import React, { useEffect } from 'react';

// const AutoDownloadPDF = () => {
//   useEffect(() => {
//     const downloadPDF = async () => {
//       const response = await fetch('http://localhost:3000/assets/pdf/eln-brochure.pdf');
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement('a');
//       link.href = url;
//       link.download = 'jotform-file.pdf'; 
//       link.click();
//       window.URL.revokeObjectURL(url);
//     };

//     downloadPDF();
//   }, []);

//   return null; 
// };

// export default AutoDownloadPDF;


// import { redirect } from 'next/navigation';

// export default function DownloadPage() {
//   redirect('/api/download');

// }




// import Link from 'next/link';

// export default function DownloadPage() {
//   return (
//     <div>
//       <h1>Download PDF</h1>
//       <Link href="/api/download">
//          Click here to download the brochure
//       </Link>
//     </div>
//   );
// }


import { redirect } from 'next/navigation';

export default function DownloadPage() {
  // Redirect to the API route to trigger the download
  redirect('/api/download');
  return null; // Nothing to render as we are redirecting
}


// import { useEffect } from 'react';

// export default function DownloadPage() {
//   useEffect(() => {
//     // Automatically redirect to the API route to trigger the download
//     window.location.href = '/api/download';
//   }, []);

//   return null; // Nothing to render, as we are redirecting immediately
// }
