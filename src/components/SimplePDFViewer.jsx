import React from 'react';
import { 
  FaChevronLeft, 
  FaDownload,
  FaExternalLinkAlt
} from 'react-icons/fa';

const SimplePDFViewer = ({ 
  pdfUrl, 
  bookTitle = "Document PDF", 
  author = "",
  onClose 
}) => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${bookTitle}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="simple-pdf-viewer">
      {/* Header */}
      <div className="pdf-header">
        <div className="header-left">
          <button onClick={onClose} className="btn btn-sm btn-outline-primary">
            <FaChevronLeft size={14} className="me-2" />
            Retour
          </button>
          <div className="book-info">
            <h4 className="book-title">{bookTitle}</h4>
            {author && <span className="book-author">par {author}</span>}
          </div>
        </div>
        
        <div className="header-right">
          <button onClick={openInNewTab} className="btn btn-sm btn-outline-primary me-2">
            <FaExternalLinkAlt size={12} className="me-2" />
            Ouvrir dans un nouvel onglet
          </button>
          <button onClick={downloadPDF} className="btn btn-sm btn-outline-success">
            <FaDownload size={12} className="me-2" />
            Télécharger
          </button>
        </div>
      </div>

      {/* PDF Embed */}
      <div className="pdf-content">
        <div className="pdf-embed-container">
          <iframe
            src={pdfUrl}
            title={bookTitle}
            className="pdf-iframe"
            loading="lazy"
          />
          
          {/* Fallback message */}
          <div className="pdf-fallback">
            <div className="fallback-content">
              <h5>Impossible d'afficher le PDF directement</h5>
              <p>Votre navigateur ne supporte pas l'affichage PDF intégré.</p>
              <div className="fallback-actions">
                <button onClick={openInNewTab} className="btn btn-primary me-2">
                  <FaExternalLinkAlt size={14} className="me-2" />
                  Ouvrir dans un nouvel onglet
                </button>
                <button onClick={downloadPDF} className="btn btn-success">
                  <FaDownload size={14} className="me-2" />
                  Télécharger le PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .simple-pdf-viewer {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
        }

        .pdf-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid var(--border-primary);
          flex-shrink: 0;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .book-info {
          display: flex;
          flex-direction: column;
        }

        .book-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.2;
        }

        .book-author {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .header-right {
          display: flex;
          align-items: center;
        }

        .pdf-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .pdf-embed-container {
          flex: 1;
          position: relative;
          background: #f5f5f5;
        }

        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: white;
        }

        .pdf-fallback {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg-primary);
          display: none;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .pdf-iframe:not([src]),
        .pdf-iframe[src=""] ~ .pdf-fallback {
          display: flex;
        }

        .fallback-content {
          text-align: center;
          max-width: 400px;
          padding: 2rem;
        }

        .fallback-content h5 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .fallback-content p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .fallback-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .pdf-header {
            flex-direction: column;
            gap: 1rem;
            padding: 0.75rem;
          }

          .header-left,
          .header-right {
            width: 100%;
            justify-content: center;
          }

          .book-title {
            font-size: 1rem;
          }

          .fallback-actions {
            flex-direction: column;
            align-items: center;
          }

          .fallback-actions .btn {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default SimplePDFViewer;