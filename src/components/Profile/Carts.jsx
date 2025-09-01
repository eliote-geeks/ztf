import React, { useState } from 'react';
import { 
  FaShoppingCart,
  FaBook,
  FaBookmark,
  FaTrash,
  FaPlus,
  FaMinus,
  FaCreditCard,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaCheck,
  FaInfoCircle,
  FaBox
} from 'react-icons/fa';

const Carts = () => {
  const [activeCartType, setActiveCartType] = useState('purchase');

  // Panier d'achat (livres à acheter)
  const [purchaseCart, setPurchaseCart] = useState([
    {
      id: 1,
      title: "Théologie Systématique - Édition de luxe",
      author: "Wayne Grudem",
      price: 35000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&q=80",
      type: "book",
      availability: "in_stock"
    },
    {
      id: 2,
      title: "Carnet de notes ZTF - Cuir",
      author: null,
      price: 8500,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop&q=80",
      type: "accessory",
      availability: "in_stock"
    }
  ]);

  // Panier d'emprunt (livres à emprunter)
  const [borrowCart, setBorrowCart] = useState([
    {
      id: 3,
      title: "Histoire du Christianisme en Afrique",
      author: "Kwame Bediako",
      isbn: "978-2-987654-32-1",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
      location: "Section Histoire - B15",
      requestDate: "2024-02-27",
      type: "physical",
      status: "available"
    },
    {
      id: 4,
      title: "Dictionnaire Biblique Illustré",
      author: "Collectif",
      isbn: "978-2-456789-12-3",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&q=80",
      location: "Section Référence - R08",
      requestDate: "2024-02-27",
      type: "reference",
      status: "reserved"
    }
  ]);

  // Panier de réservation (livres réservés)
  const [reservationCart, setReservationCart] = useState([
    {
      id: 5,
      title: "Philosophie Africaine Contemporaine",
      author: "Kwame Gyekye",
      isbn: "978-2-456789-12-3",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop&q=80",
      location: "Section Philosophie - P12",
      reservationDate: "2024-02-28",
      availableDate: "2024-03-05",
      type: "book",
      status: "confirmed"
    }
  ]);

  const cartTypes = [
    { id: 'purchase', label: 'Achats', icon: FaShoppingCart, count: purchaseCart.length },
    { id: 'borrow', label: 'Emprunts', icon: FaBook, count: borrowCart.length },
    { id: 'reservation', label: 'Réservations', icon: FaBookmark, count: reservationCart.length }
  ];

  const updateQuantity = (cartType, itemId, newQuantity) => {
    if (cartType === 'purchase') {
      setPurchaseCart(cart => 
        cart.map(item => 
          item.id === itemId 
            ? { ...item, quantity: Math.max(1, newQuantity) }
            : item
        )
      );
    }
  };

  const removeFromCart = (cartType, itemId) => {
    if (cartType === 'purchase') {
      setPurchaseCart(cart => cart.filter(item => item.id !== itemId));
    } else if (cartType === 'borrow') {
      setBorrowCart(cart => cart.filter(item => item.id !== itemId));
    } else if (cartType === 'reservation') {
      setReservationCart(cart => cart.filter(item => item.id !== itemId));
    }
  };

  const getTotalPrice = () => {
    return purchaseCart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getActiveCart = () => {
    switch (activeCartType) {
      case 'purchase': return purchaseCart;
      case 'borrow': return borrowCart;
      case 'reservation': return reservationCart;
      default: return [];
    }
  };

  const formatPrice = (price) => {
    return price.toLocaleString() + ' FCFA';
  };

  const renderCartItem = (item, cartType) => {
    switch (cartType) {
      case 'purchase':
        return (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-content">
              <div className="item-info">
                <h3 className="item-title">{item.title}</h3>
                {item.author && <p className="item-author">{item.author}</p>}
                <div className="item-tags">
                  <span className="tag tag-type">{item.type === 'book' ? 'Livre' : 'Accessoire'}</span>
                  <span className="tag tag-stock">En stock</span>
                </div>
              </div>
              <div className="item-actions">
                <div className="item-price">{formatPrice(item.price)}</div>
                <div className="quantity-section">
                  <div className="quantity-controls">
                    <button 
                      className="qty-btn"
                      onClick={() => updateQuantity(cartType, item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="qty-display">{item.quantity}</span>
                    <button 
                      className="qty-btn"
                      onClick={() => updateQuantity(cartType, item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(cartType, item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'borrow':
        return (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-content">
              <div className="item-info">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-author">{item.author}</p>
                <div className="item-stats">
                  <div className="stat-badge">
                    <span>📚 {item.type === 'physical' ? 'Livre physique' : 'Ouvrage de référence'}</span>
                  </div>
                  <div className="stat-badge">
                    <span>⏳ Durée: 30 jours</span>
                  </div>
                </div>
                <div className="item-tags">
                  <span className="tag tag-isbn">ISBN: {item.isbn}</span>
                  <span className={`tag ${item.status === 'available' ? 'tag-available' : 'tag-reserved'}`}>
                    {item.status === 'available' ? 'Disponible' : 'Réservé'}
                  </span>
                </div>
              </div>
              <div className="item-actions">
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(cartType, item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        );

      case 'reservation':
        return (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-content">
              <div className="item-info">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-author">{item.author}</p>
                <div className="item-stats">
                  <div className="stat-badge">
                    <span>🔖 Réservation active</span>
                  </div>
                  <div className="stat-badge">
                    <span>📅 Disponible dans 5 jours</span>
                  </div>
                  <div className="stat-badge">
                    <span>⭐ Note: 4.8/5</span>
                  </div>
                </div>
                <div className="item-tags">
                  <span className="tag tag-isbn">ISBN: {item.isbn}</span>
                  <span className={`tag ${item.status === 'confirmed' ? 'tag-confirmed' : 'tag-pending'}`}>
                    {item.status === 'confirmed' ? 'Confirmée' : 'En attente'}
                  </span>
                </div>
              </div>
              <div className="item-actions">
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(cartType, item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderCartSummary = () => {
    const activeCart = getActiveCart();
    
    if (activeCart.length === 0) {
      return (
        <div className="empty-cart">
          <FaBox className="empty-icon" />
          <h3>Panier vide</h3>
          <p>Votre panier {cartTypes.find(t => t.id === activeCartType)?.label.toLowerCase()} est vide.</p>
        </div>
      );
    }

    switch (activeCartType) {
      case 'purchase':
        return (
          <div className="cart-summary">
            <h3>Résumé de la commande</h3>
            <div className="summary-line">
              <span>Sous-total ({purchaseCart.length} articles)</span>
              <span>{formatPrice(getTotalPrice())}</span>
            </div>
            <div className="summary-line">
              <span>Frais de livraison</span>
              <span className="free">Gratuit</span>
            </div>
            <div className="summary-line total-line">
              <span>Total</span>
              <span>{formatPrice(getTotalPrice())}</span>
            </div>
            <button className="checkout-button">
              <FaCreditCard />
              <span>Procéder au paiement</span>
            </button>
          </div>
        );

      case 'borrow':
        return (
          <div className="cart-summary">
            <h3>Informations d'emprunt</h3>
            <div className="info-box">
              <FaInfoCircle />
              <span>Durée d'emprunt: 30 jours (renouvelable 3 fois)</span>
            </div>
            <button className="checkout-button">
              <FaCheck />
              <span>Confirmer les emprunts</span>
            </button>
          </div>
        );

      case 'reservation':
        return (
          <div className="cart-summary">
            <h3>Informations de réservation</h3>
            <div className="info-box">
              <FaInfoCircle />
              <span>Les livres réservés seront disponibles selon les dates indiquées</span>
            </div>
            <button className="checkout-button">
              <FaCheck />
              <span>Confirmer les réservations</span>
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="carts-container">
      <div className="page-header">
        <h1>Mes Paniers</h1>
        <p>Gérez vos achats, emprunts et réservations</p>
      </div>

      <div className="cart-tabs">
        {cartTypes.map(cartType => {
          const Icon = cartType.icon;
          return (
            <button
              key={cartType.id}
              className={`tab-button ${activeCartType === cartType.id ? 'active' : ''}`}
              onClick={() => setActiveCartType(cartType.id)}
            >
              <Icon />
              <span>{cartType.label}</span>
              {cartType.count > 0 && <span className="count-badge">{cartType.count}</span>}
            </button>
          );
        })}
      </div>

      <div className="cart-layout">
        <div className="cart-items-section">
          {getActiveCart().map(item => renderCartItem(item, activeCartType))}
        </div>
        
        <div className="cart-sidebar">
          {renderCartSummary()}
        </div>
      </div>

      <style jsx>{`
        .carts-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          background: var(--bg-primary);
          min-height: 100vh;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-header h1 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .page-header p {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
        }

        .cart-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .tab-button {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: var(--text-secondary);
          padding: 1rem 1.5rem;
          border-radius: 0;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          position: relative;
        }

        .tab-button:hover {
          background: rgba(29, 79, 139, 0.1);
          border-color: rgba(29, 79, 139, 0.3);
          color: #1d4f8b;
        }

        .tab-button.active {
          background: #1d4f8b;
          border-color: #1d4f8b;
          color: white;
        }

        .count-badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 0;
          font-size: 0.75rem;
          font-weight: 600;
          min-width: 20px;
          text-align: center;
        }

        .tab-button:not(.active) .count-badge {
          background: #1d4f8b;
          color: white;
        }

        .cart-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .cart-items-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cart-item {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 0;
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          transition: all 0.2s ease;
        }

        .cart-item:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .item-image {
          width: 100px;
          height: 130px;
          flex-shrink: 0;
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
        }

        .item-content {
          flex: 1;
          display: flex;
          justify-content: space-between;
        }

        .item-info {
          flex: 1;
        }

        .item-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .item-author {
          color: var(--text-primary);
          margin: 0 0 1rem 0;
          font-size: 0.9rem;
        }

        .item-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .item-stats {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .stat-badge {
          background: rgba(29, 79, 139, 0.1);
          border: 1px solid rgba(29, 79, 139, 0.2);
          color: #1d4f8b;
          padding: 0.25rem 0.5rem;
          border-radius: 0;
          font-size: 0.75rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .item-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tag {
          padding: 0.25rem 0.5rem;
          border-radius: 0;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid;
        }

        .tag-type {
          background: rgba(29, 79, 139, 0.1);
          border-color: rgba(29, 79, 139, 0.3);
          color: #1d4f8b;
        }

        .tag-stock, .tag-available, .tag-confirmed {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.3);
          color: #22c55e;
        }

        .tag-reserved, .tag-pending {
          background: rgba(251, 191, 36, 0.1);
          border-color: rgba(251, 191, 36, 0.3);
          color: #fbbf24;
        }

        .tag-isbn {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
          color: var(--text-tertiary);
        }

        .amenities {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .amenity {
          background: rgba(29, 79, 139, 0.15);
          border: 1px solid rgba(29, 79, 139, 0.4);
          color: #1d4f8b;
          padding: 0.2rem 0.4rem;
          border-radius: 0;
          font-size: 0.7rem;
        }

        .item-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
        }

        .item-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1d4f8b;
        }

        .quantity-section {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 0;
          border: 2px solid #1d4f8b;
          border-radius: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .qty-btn {
          background: rgba(0, 0, 0, 0.4);
          border: none;
          border-right: 1px solid rgba(255, 255, 255, 0.4);
          color: white;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 1.2rem;
          font-weight: 700;
        }

        .qty-btn:last-child {
          border-right: none;
          border-left: 1px solid rgba(255, 255, 255, 0.4);
        }

        .qty-btn:hover {
          background: #1d4f8b;
          color: white;
        }

        .qty-display {
          background: rgba(0, 0, 0, 0.2);
          color: white;
          font-weight: 600;
          width: 40px;
          text-align: center;
          line-height: 32px;
          font-size: 1rem;
        }

        .remove-btn {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
          padding: 0.5rem;
          border-radius: 0;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .remove-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.5);
        }

        .cart-sidebar {
          position: sticky;
          top: 2rem;
          height: fit-content;
        }

        .cart-summary {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 0;
          padding: 2rem;
        }

        .cart-summary h3 {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .summary-line.total-line {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 1rem;
          margin-top: 1.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .free {
          color: #22c55e;
          font-weight: 500;
        }

        .info-box {
          background: rgba(29, 79, 139, 0.15);
          border: 1px solid rgba(29, 79, 139, 0.4);
          border-radius: 0;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-primary);
          font-size: 0.85rem;
          margin-bottom: 2rem;
        }

        .info-box svg {
          color: #1d4f8b;
          flex-shrink: 0;
        }

        .checkout-button {
          background: #1d4f8b;
          border: none;
          color: white;
          padding: 1rem;
          border-radius: 0;
          width: 100%;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .checkout-button:hover {
          background: #1a4480;
        }

        .empty-cart {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0;
        }

        .empty-icon {
          font-size: 3rem;
          color: var(--text-tertiary);
          margin-bottom: 1rem;
        }

        .empty-cart h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
        }

        .empty-cart p {
          color: var(--text-secondary);
          margin: 0;
        }

        @media (max-width: 768px) {
          .carts-container {
            padding: 1rem;
          }

          .cart-layout {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .cart-tabs {
            flex-direction: column;
          }

          .cart-item {
            flex-direction: column;
            gap: 1rem;
          }

          .item-image {
            width: 100%;
            height: 200px;
          }

          .item-content {
            flex-direction: column;
            gap: 1rem;
          }

          .item-actions {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .quantity-section {
            flex-direction: row;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Carts;