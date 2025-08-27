import React, { useState } from 'react';
import { 
  FaShoppingCart,
  FaBook,
  FaHeart,
  FaBookmark,
  FaTrash,
  FaPlus,
  FaMinus,
  FaCreditCard,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaTimes,
  FaCheck,
  FaInfoCircle
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

  // Panier de réservation (salles de lecture)
  const [reservationCart, setReservationCart] = useState([
    {
      id: 5,
      title: "Salle de Lecture Générale",
      type: "room",
      capacity: 120,
      date: "2024-03-01",
      timeSlot: "09:00 - 12:00",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&q=80",
      location: "Rez-de-chaussée, Aile Est",
      amenities: ["WiFi", "Prises électriques", "Climatisation"],
      status: "pending"
    },
    {
      id: 6,
      title: "Salle de Travail en Groupe",
      type: "room",
      capacity: 8,
      date: "2024-03-02",
      timeSlot: "14:00 - 17:00",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop&q=80",
      location: "1er étage, Aile Ouest",
      amenities: ["Écran TV", "WiFi", "Tableau blanc"],
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

  const renderCartItem = (item, cartType) => {
    switch (cartType) {
      case 'purchase':
        return (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-details">
              <h4>{item.title}</h4>
              {item.author && <p className="item-author">{item.author}</p>}
              <div className="item-meta">
                <span className={`item-type ${item.type}`}>
                  {item.type === 'book' ? 'Livre' : 'Accessoire'}
                </span>
                <span className={`availability ${item.availability}`}>
                  {item.availability === 'in_stock' ? 'En stock' : 'Épuisé'}
                </span>
              </div>
              <div className="item-price">
                {item.price.toLocaleString()} FCFA
              </div>
            </div>
            <div className="item-actions">
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(cartType, item.id, item.quantity - 1)}>
                  <FaMinus size={12} />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(cartType, item.id, item.quantity + 1)}>
                  <FaPlus size={12} />
                </button>
              </div>
              <button 
                className="remove-btn"
                onClick={() => removeFromCart(cartType, item.id)}
              >
                <FaTrash size={14} />
              </button>
            </div>
          </div>
        );

      case 'borrow':
        return (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-details">
              <h4>{item.title}</h4>
              <p className="item-author">{item.author}</p>
              <div className="item-meta">
                <span className="item-isbn">ISBN: {item.isbn}</span>
                <span className={`item-status ${item.status}`}>
                  {item.status === 'available' ? 'Disponible' : 'Réservé'}
                </span>
              </div>
              <div className="item-location">
                <FaMapMarkerAlt size={12} />
                {item.location}
              </div>
              <div className="item-date">
                <FaClock size={12} />
                Demandé le {new Date(item.requestDate).toLocaleDateString('fr-FR')}
              </div>
            </div>
            <div className="item-actions">
              <button 
                className="remove-btn"
                onClick={() => removeFromCart(cartType, item.id)}
              >
                <FaTrash size={14} />
              </button>
            </div>
          </div>
        );

      case 'reservation':
        return (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-details">
              <h4>{item.title}</h4>
              <div className="item-meta">
                <span className="item-capacity">
                  <FaUser size={12} />
                  {item.capacity} places
                </span>
                <span className={`reservation-status ${item.status}`}>
                  {item.status === 'confirmed' ? 'Confirmée' : 'En attente'}
                </span>
              </div>
              <div className="item-schedule">
                <FaClock size={12} />
                {new Date(item.date).toLocaleDateString('fr-FR')} - {item.timeSlot}
              </div>
              <div className="item-location">
                <FaMapMarkerAlt size={12} />
                {item.location}
              </div>
              <div className="item-amenities">
                {item.amenities.map((amenity, index) => (
                  <span key={index} className="amenity-tag">{amenity}</span>
                ))}
              </div>
            </div>
            <div className="item-actions">
              <button 
                className="remove-btn"
                onClick={() => removeFromCart(cartType, item.id)}
              >
                <FaTrash size={14} />
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderCartActions = () => {
    const activeCart = getActiveCart();
    
    if (activeCart.length === 0) {
      return (
        <div className="empty-cart">
          <div className="empty-icon">
            <FaInfoCircle size={48} />
          </div>
          <h3>Panier vide</h3>
          <p>Votre panier {cartTypes.find(t => t.id === activeCartType)?.label.toLowerCase()} est vide.</p>
        </div>
      );
    }

    switch (activeCartType) {
      case 'purchase':
        return (
          <div className="cart-summary">
            <div className="summary-details">
              <div className="summary-line">
                <span>Sous-total ({purchaseCart.length} articles)</span>
                <span>{getTotalPrice().toLocaleString()} FCFA</span>
              </div>
              <div className="summary-line">
                <span>Frais de livraison</span>
                <span>Gratuit</span>
              </div>
              <div className="summary-line total">
                <span>Total</span>
                <span>{getTotalPrice().toLocaleString()} FCFA</span>
              </div>
            </div>
            <button className="checkout-btn">
              <FaCreditCard size={14} />
              Procéder au paiement
            </button>
          </div>
        );

      case 'borrow':
        return (
          <div className="cart-summary">
            <div className="summary-details">
              <div className="summary-info">
                <FaInfoCircle size={14} />
                <span>Durée d'emprunt: 30 jours (renouvelable 3 fois)</span>
              </div>
            </div>
            <button className="checkout-btn">
              <FaCheck size={14} />
              Confirmer les emprunts
            </button>
          </div>
        );

      case 'reservation':
        return (
          <div className="cart-summary">
            <div className="summary-details">
              <div className="summary-info">
                <FaInfoCircle size={14} />
                <span>Les réservations sont confirmées sous 24h</span>
              </div>
            </div>
            <button className="checkout-btn">
              <FaCheck size={14} />
              Finaliser les réservations
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="carts-container">
      <div className="carts-header">
        <h2>Mes Paniers</h2>
        <div className="cart-tabs">
          {cartTypes.map(cartType => {
            const Icon = cartType.icon;
            return (
              <button
                key={cartType.id}
                className={`cart-tab ${activeCartType === cartType.id ? 'active' : ''}`}
                onClick={() => setActiveCartType(cartType.id)}
              >
                <Icon size={16} />
                <span>{cartType.label}</span>
                {cartType.count > 0 && <span className="cart-count">{cartType.count}</span>}
              </button>
            );
          })}
        </div>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {getActiveCart().map(item => renderCartItem(item, activeCartType))}
        </div>
        
        {renderCartActions()}
      </div>

      <style jsx>{`
        .carts-container {
          background: var(--bg-primary);
          min-height: 100vh;
          padding: 2rem 0;
        }

        .carts-header {
          margin-bottom: 2rem;
        }

        .carts-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .cart-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .cart-tab {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .cart-tab:hover {
          background: rgba(29, 79, 139, 0.1);
          border-color: rgba(29, 79, 139, 0.3);
          color: #1d4f8b;
        }

        .cart-tab.active {
          background: #1d4f8b;
          border-color: #1d4f8b;
          color: white;
        }

        .cart-count {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 10px;
          font-size: 0.75rem;
          font-weight: 600;
          min-width: 20px;
          text-align: center;
        }

        .cart-tab:not(.active) .cart-count {
          background: #1d4f8b;
          color: white;
        }

        .cart-content {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
        }

        .cart-items {
          max-height: 600px;
          overflow-y: auto;
        }

        .cart-item {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: background 0.3s ease;
        }

        .cart-item:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .cart-item:last-child {
          border-bottom: none;
        }

        .item-image {
          width: 80px;
          height: 100px;
          flex-shrink: 0;
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .item-details {
          flex: 1;
        }

        .item-details h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .item-author {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .item-meta {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .item-type, .availability, .item-status, .reservation-status {
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .item-type.book {
          background: rgba(29, 79, 139, 0.1);
          color: #1d4f8b;
        }

        .item-type.accessory {
          background: rgba(29, 79, 139, 0.1);
          color: #1d4f8b;
        }

        .availability.in_stock, .item-status.available, .reservation-status.confirmed {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .availability.out_of_stock, .item-status.reserved, .reservation-status.pending {
          background: rgba(251, 191, 36, 0.1);
          color: #fbbf24;
        }

        .item-price {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1d4f8b;
          margin-bottom: 0.5rem;
        }

        .item-isbn {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .item-location, .item-date, .item-schedule {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .item-capacity {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .item-amenities {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }

        .amenity-tag {
          background: rgba(29, 79, 139, 0.1);
          color: #1d4f8b;
          padding: 0.15rem 0.4rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .item-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-end;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 0.5rem;
        }

        .quantity-controls button {
          background: rgba(29, 79, 139, 0.15);
          border: 1px solid rgba(29, 79, 139, 0.3);
          border-radius: 4px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1d4f8b;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .quantity-controls button:hover {
          background: rgba(29, 79, 139, 0.25);
          border-color: rgba(29, 79, 139, 0.5);
          color: #1d4f8b;
        }

        .quantity-controls span {
          min-width: 30px;
          text-align: center;
          color: var(--text-primary);
          font-weight: 500;
        }

        .remove-btn {
          background: rgba(239, 68, 68, 0.1);
          border: none;
          border-radius: 8px;
          padding: 0.5rem;
          color: #ef4444;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .remove-btn:hover {
          background: rgba(239, 68, 68, 0.2);
        }

        .cart-summary {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .summary-details {
          margin-bottom: 1.5rem;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          color: var(--text-secondary);
        }

        .summary-line.total {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .summary-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .checkout-btn {
          width: 100%;
          background: #1d4f8b;
          color: white;
          border: none;
          border-radius: 12px;
          padding: 1rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .checkout-btn:hover {
          background: #1a4480;
          transform: translateY(-1px);
        }

        .empty-cart {
          padding: 4rem 2rem;
          text-align: center;
        }

        .empty-icon {
          color: var(--text-tertiary);
          margin-bottom: 1rem;
        }

        .empty-cart h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .empty-cart p {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .cart-tabs {
            flex-direction: column;
          }

          .cart-tab {
            padding: 0.75rem 1rem;
            font-size: 0.875rem;
          }

          .cart-item {
            flex-direction: column;
            gap: 1rem;
          }

          .item-image {
            width: 100%;
            height: 200px;
          }

          .item-actions {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .action-btn {
            padding: 0.4rem 0.75rem;
            font-size: 0.8rem;
          }

          .checkout-btn {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }

          .quantity-controls button {
            width: 24px;
            height: 24px;
          }

          .remove-btn {
            padding: 0.4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Carts;