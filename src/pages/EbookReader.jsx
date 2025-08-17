import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PDFReader from '../components/PDFReader';
import SimplePDFViewer from '../components/SimplePDFViewer';
import { 
  FaBook, 
  FaArrowLeft, 
  FaExclamationTriangle,
  FaSpinner 
} from 'react-icons/fa';

const EbookReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useSimpleViewer, setUseSimpleViewer] = useState(false);

  // Sample ebook data with real PDF URLs for testing
  const ebooksDatabase = {
    '1': {
      id: 1,
      title: "L'Art de la Prière",
      author: "Zacharias Tanee Fomum",
      category: "Théologie",
      year: 2019,
      pages: 320,
      pdfUrl: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf", // Real PDF
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      description: "Guide complet sur la pratique de la prière chrétienne et la communion avec Dieu."
    },
    '2': {
      id: 2,
      title: "Histoire du Cameroun Moderne",
      author: "Jean-Baptiste Sipa",
      category: "Histoire",
      year: 2021,
      pages: 485,
      pdfUrl: "https://www.pdf995.com/samples/pdf.pdf", // Real PDF sample
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      description: "Une analyse approfondie de l'évolution politique et sociale du Cameroun post-indépendance."
    },
    '3': {
      id: 3,
      title: "Contes et Légendes du Cameroun",
      author: "Marie Atangana",
      category: "Littérature",
      year: 2020,
      pages: 256,
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // W3C test PDF
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
      description: "Recueil des traditions orales et légendes des différentes ethnies camerounaises."
    },
    '4': {
      id: 4,
      title: "Développement Durable en Afrique Centrale",
      author: "Dr. Paul Mbarga",
      category: "Sciences",
      year: 2022,
      pages: 390,
      pdfUrl: "https://www.clickdimensions.com/links/TestPDFfile.pdf", // Real test PDF
      cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop",
      description: "Stratégies et défis du développement durable dans la région d'Afrique Centrale."
    },
    '5': {
      id: 5,
      title: "Philosophie Africaine Contemporaine",
      author: "Prof. Emmanuel Ngwé",
      category: "Philosophie",
      year: 2021,
      pages: 420,
      pdfUrl: "https://www.orimi.com/pdf-test.pdf", // Real test PDF
      cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=400&fit=crop",
      description: "Exploration des courants philosophiques africains modernes et leurs influences."
    },
    '6': {
      id: 6,
      title: "Pédagogie et Innovation au Cameroun",
      author: "Dr. Françoise Mendomo",
      category: "Éducation",
      year: 2023,
      pages: 298,
      pdfUrl: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf", // Adobe sample PDF
      cover: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=400&fit=crop",
      description: "Nouvelles approches pédagogiques adaptées au contexte éducatif camerounais."
    }
  };

  useEffect(() => {
    const loadBook = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const bookData = ebooksDatabase[id];
        if (!bookData) {
          throw new Error('Livre non trouvé');
        }

        setBook(bookData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadBook();
    }
  }, [id]);

  const handleClose = (signal) => {
    if (signal === 'use_simple_viewer') {
      setUseSimpleViewer(true);
    } else {
      navigate('/catalogue');
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="ebook-reader-container">
        <div className="loading-state">
          <div className="loading-content">
            <FaSpinner className="loading-spinner" size={48} />
            <h3>Chargement du livre...</h3>
            <p>Préparation de votre lecture</p>
          </div>
        </div>

        <style jsx>{`
          .ebook-reader-container {
            height: 100vh;
            background: var(--bg-primary);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .loading-state {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          .loading-content {
            text-align: center;
            color: var(--text-primary);
          }

          .loading-spinner {
            color: var(--buttercup);
            animation: spin 1s linear infinite;
            margin-bottom: 1.5rem;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .loading-content h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .loading-content p {
            color: var(--text-secondary);
            font-size: 1rem;
          }
        `}</style>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="ebook-reader-container">
        <div className="error-state">
          <div className="error-content">
            <FaExclamationTriangle className="error-icon" size={48} />
            <h3>Erreur de chargement</h3>
            <p>{error}</p>
            <div className="error-actions">
              <button onClick={handleClose} className="btn btn-primary">
                <FaArrowLeft size={14} className="me-2" />
                Retour au catalogue
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          .ebook-reader-container {
            height: 100vh;
            background: var(--bg-primary);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .error-state {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          .error-content {
            text-align: center;
            color: var(--text-primary);
            max-width: 400px;
            padding: 2rem;
          }

          .error-icon {
            color: #dc3545;
            margin-bottom: 1.5rem;
          }

          .error-content h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          .error-content p {
            color: var(--text-secondary);
            font-size: 1rem;
            margin-bottom: 2rem;
            line-height: 1.5;
          }

          .error-actions {
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }

  // PDF Reader state
  if (book) {
    // Try PDFReader first, fallback to SimplePDFViewer if issues
    if (useSimpleViewer) {
      return (
        <SimplePDFViewer
          pdfUrl={book.pdfUrl}
          bookTitle={book.title}
          author={book.author}
          onClose={handleClose}
        />
      );
    }

    return (
      <div>
        <PDFReader
          pdfUrl={book.pdfUrl}
          bookTitle={book.title}
          author={book.author}
          onClose={handleClose}
        />
        
        {/* Fallback button */}
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999
        }}>
          <button 
            onClick={() => setUseSimpleViewer(true)}
            className="btn btn-sm btn-warning"
            title="Utiliser le visualiseur simple"
          >
            Problème de chargement ? Cliquez ici
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default EbookReader;