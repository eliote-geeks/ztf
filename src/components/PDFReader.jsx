import React, { useState, useCallback } from 'react';
import { Document, Page } from 'react-pdf';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaSearchPlus, 
  FaSearchMinus,
  FaHome,
  FaDownload,
  FaBook,
  FaExpand,
  FaCompress,
  FaUndo,
  FaRedo,
  FaPrint,
  FaBookmark,
  FaEye,
  FaEyeSlash,
  FaExclamationTriangle
} from 'react-icons/fa';

// Import PDF configuration and styles
import '../utils/pdfConfig.js';
import '../styles/react-pdf.css';

const PDFReader = ({ 
  pdfUrl, 
  bookTitle = "Document PDF", 
  author = "",
  onClose 
}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [hasWorkerError, setHasWorkerError] = useState(false);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
  }, []);

  const onDocumentLoadError = useCallback((error) => {
    console.error('Error loading PDF:', error);
    setIsLoading(false);
    
    // Check if it's a worker-related error
    if (error.message.includes('worker') || error.message.includes('Failed to fetch')) {
      console.error('PDF Worker Error: CORS or worker configuration issue detected');
      setHasWorkerError(true);
      
      // Automatically fallback after a short delay
      setTimeout(() => {
        if (onClose && typeof onClose === 'function') {
          // Signal parent to use simple viewer
          onClose('use_simple_viewer');
        }
      }, 2000);
    }
  }, [onClose]);

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(numPages, prev + 1));
  };

  const goToPage = (page) => {
    const pageNum = Math.max(1, Math.min(numPages, page));
    setPageNumber(pageNum);
  };

  const zoomIn = () => {
    setScale(prev => Math.min(3.0, prev + 0.2));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(0.5, prev - 0.2));
  };

  const resetZoom = () => {
    setScale(1.0);
  };

  const rotateLeft = () => {
    setRotation(prev => (prev - 90) % 360);
  };

  const rotateRight = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const addBookmark = () => {
    const bookmark = {
      id: Date.now(),
      page: pageNumber,
      title: `Page ${pageNumber}`,
      timestamp: new Date().toLocaleString()
    };
    setBookmarks(prev => [...prev, bookmark]);
  };

  const removeBookmark = (id) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
  };

  const goToBookmark = (page) => {
    setPageNumber(page);
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${bookTitle}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`pdf-reader-container ${isFullscreen ? 'fullscreen' : ''}`}>
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
        
        <div className="header-center">
          <div className="page-controls">
            <button 
              onClick={goToPrevPage} 
              disabled={pageNumber <= 1}
              className="btn btn-sm btn-outline-secondary"
            >
              <FaChevronLeft size={12} />
            </button>
            
            <div className="page-input-group">
              <input
                type="number"
                className="form-control page-input"
                value={pageNumber}
                onChange={(e) => goToPage(parseInt(e.target.value))}
                min={1}
                max={numPages}
              />
              <span className="page-total">/ {numPages || 0}</span>
            </div>
            
            <button 
              onClick={goToNextPage} 
              disabled={pageNumber >= numPages}
              className="btn btn-sm btn-outline-secondary"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>

        <div className="header-right">
          <div className="toolbar">
            <button onClick={zoomOut} className="btn btn-sm btn-outline-secondary">
              <FaSearchMinus size={12} />
            </button>
            <button onClick={resetZoom} className="btn btn-sm btn-outline-secondary">
              {Math.round(scale * 100)}%
            </button>
            <button onClick={zoomIn} className="btn btn-sm btn-outline-secondary">
              <FaSearchPlus size={12} />
            </button>
            
            <div className="toolbar-divider"></div>
            
            <button onClick={rotateLeft} className="btn btn-sm btn-outline-secondary">
              <FaUndo size={12} />
            </button>
            <button onClick={rotateRight} className="btn btn-sm btn-outline-secondary">
              <FaRedo size={12} />
            </button>
            
            <div className="toolbar-divider"></div>
            
            <button 
              onClick={() => setShowSidebar(!showSidebar)} 
              className="btn btn-sm btn-outline-secondary"
            >
              {showSidebar ? <FaEyeSlash size={12} /> : <FaEye size={12} />}
            </button>
            <button onClick={addBookmark} className="btn btn-sm btn-outline-warning">
              <FaBookmark size={12} />
            </button>
            <button onClick={downloadPDF} className="btn btn-sm btn-outline-success">
              <FaDownload size={12} />
            </button>
            <button onClick={toggleFullscreen} className="btn btn-sm btn-outline-primary">
              {isFullscreen ? <FaCompress size={12} /> : <FaExpand size={12} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pdf-content">
        {/* Sidebar */}
        {showSidebar && (
          <div className="pdf-sidebar">
            <div className="sidebar-tabs">
              <div className="tab-content">
                <h6>Signets</h6>
                <div className="bookmarks-list">
                  {bookmarks.map(bookmark => (
                    <div key={bookmark.id} className="bookmark-item">
                      <button 
                        onClick={() => goToBookmark(bookmark.page)}
                        className="bookmark-link"
                      >
                        <FaBookmark size={10} />
                        <span>{bookmark.title}</span>
                      </button>
                      <button 
                        onClick={() => removeBookmark(bookmark.id)}
                        className="bookmark-remove"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  {bookmarks.length === 0 && (
                    <p className="no-bookmarks">Aucun signet ajouté</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PDF Viewer */}
        <div className="pdf-viewer">
          {isLoading && !hasWorkerError && (
            <div className="loading-spinner">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Chargement...</span>
              </div>
              <p>Chargement du document...</p>
            </div>
          )}

          {hasWorkerError && (
            <div className="loading-spinner">
              <div className="text-warning">
                <FaExclamationTriangle size={48} />
              </div>
              <h5>Problème de configuration PDF</h5>
              <p>Basculement vers le visualiseur simple...</p>
              <button 
                onClick={() => onClose && onClose('use_simple_viewer')}
                className="btn btn-warning"
              >
                Continuer avec le visualiseur simple
              </button>
            </div>
          )}
          
          <div className="pdf-document">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="loading-spinner">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Chargement...</span>
                  </div>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                rotate={rotation}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </Document>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pdf-reader-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
        }

        .pdf-reader-container.fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
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

        .header-center {
          display: flex;
          justify-content: center;
          flex: 1;
        }

        .page-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem;
          border-radius: 8px;
          border: 1px solid var(--border-primary);
        }

        .page-input-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .page-input {
          width: 60px;
          text-align: center;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-primary);
          color: var(--text-primary);
          font-size: 0.875rem;
          padding: 0.25rem;
        }

        .page-input:focus {
          border-color: var(--buttercup);
          box-shadow: 0 0 0 2px rgba(241, 196, 14, 0.1);
          outline: none;
        }

        .page-total {
          color: var(--text-secondary);
          font-size: 0.875rem;
          white-space: nowrap;
        }

        .header-right {
          display: flex;
          justify-content: flex-end;
          flex: 1;
        }

        .toolbar {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .toolbar-divider {
          width: 1px;
          height: 20px;
          background: var(--border-primary);
          margin: 0 0.5rem;
        }

        .pdf-content {
          display: flex;
          flex: 1;
          overflow: hidden;
        }

        .pdf-sidebar {
          width: 300px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-right: 1px solid var(--border-primary);
          padding: 1rem;
          overflow-y: auto;
          flex-shrink: 0;
        }

        .sidebar-tabs h6 {
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-primary);
        }

        .bookmarks-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .bookmark-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-primary);
          border-radius: 6px;
          padding: 0.5rem;
        }

        .bookmark-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.75rem;
          cursor: pointer;
          flex: 1;
          text-align: left;
        }

        .bookmark-link:hover {
          color: var(--buttercup);
        }

        .bookmark-remove {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 1rem;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bookmark-remove:hover {
          color: #dc3545;
        }

        .no-bookmarks {
          color: var(--text-secondary);
          font-size: 0.75rem;
          text-align: center;
          padding: 1rem;
          margin: 0;
        }

        .pdf-viewer {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: auto;
          padding: 1rem;
          background: #f8f9fa;
        }

        .loading-spinner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          min-height: 200px;
          color: var(--text-primary);
        }

        .pdf-document {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        /* React-PDF specific styles */
        .react-pdf__Page {
          margin: 0 auto;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }

        .react-pdf__Page__canvas {
          max-width: 100%;
          height: auto !important;
        }

        .react-pdf__Page__textContent {
          color: transparent;
        }

        .react-pdf__Page__annotations {
          pointer-events: auto;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .pdf-header {
            flex-direction: column;
            gap: 1rem;
            padding: 0.75rem;
          }

          .header-left,
          .header-center,
          .header-right {
            flex: none;
            width: 100%;
          }

          .toolbar {
            justify-content: center;
            flex-wrap: wrap;
          }

          .pdf-sidebar {
            width: 250px;
          }

          .book-title {
            font-size: 1rem;
          }

          .page-input {
            width: 50px;
          }
        }

        @media (max-width: 576px) {
          .pdf-content {
            flex-direction: column;
          }

          .pdf-sidebar {
            width: 100%;
            height: 200px;
            border-right: none;
            border-bottom: 1px solid var(--border-primary);
          }

          .toolbar {
            gap: 0.125rem;
          }

          .toolbar .btn {
            padding: 0.25rem 0.375rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PDFReader;