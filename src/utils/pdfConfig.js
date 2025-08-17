import { pdfjs } from 'react-pdf';

// Configure PDF.js worker with multiple fallbacks
let workerConfigured = false;

const configurePDFWorker = () => {
  if (workerConfigured) return;
  
  try {
    // First try: Local worker file
    pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
    workerConfigured = true;
    console.log('PDF.js worker configured with local file');
  } catch (error) {
    console.warn('Failed to configure local PDF worker:', error);
    
    try {
      // Second try: Use jsdelivr (usually more reliable for CORS)
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
      workerConfigured = true;
      console.log('PDF.js worker configured with jsdelivr CDN');
    } catch (cdnError) {
      console.error('All PDF worker configuration attempts failed:', cdnError);
      // Let react-pdf handle with fake worker
    }
  }
};

// Configure immediately
configurePDFWorker();

export { pdfjs };