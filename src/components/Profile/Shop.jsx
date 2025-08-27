import React, { useState } from 'react';
import { 
  FaShoppingCart,
  FaStar,
  FaFilter,
  FaSearch,
  FaSort,
  FaList,
  FaTh,
  FaHeart,
  FaEye,
  FaShoppingBag,
  FaTrash,
  FaPlus,
  FaMinus,
  FaCreditCard,
  FaTag
} from 'react-icons/fa';

const Shop = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Produits disponibles dans la boutique
  const products = [
    {
      id: 1,
      name: "Théologie Systématique - Édition de luxe",
      author: "Wayne Grudem",
      category: "Livres",
      price: 35000,
      originalPrice: 42000,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&q=80",
      rating: 4.8,
      reviews: 124,
      discount: 17,
      inStock: true,
      stock: 5,
      description: "Édition reliée avec couverture dorée - Référence complète en théologie systématique",
      isbn: "978-2-123456-78-9"
    },
    {
      id: 2,
      name: "Carnet de notes ZTF - Cuir",
      author: null,
      category: "Papeterie",
      price: 8500,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop&q=80",
      rating: 4.6,
      reviews: 89,
      discount: 0,
      inStock: true,
      stock: 25,
      description: "Carnet en cuir véritable avec logo ZTF gravé - 200 pages lignées",
      isbn: null
    },
    {
      id: 3,
      name: "Histoire du Christianisme - Coffret 3 volumes",
      author: "Divers auteurs",
      category: "Livres",
      price: 55000,
      originalPrice: 65000,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
      rating: 4.9,
      reviews: 67,
      discount: 15,
      inStock: true,
      stock: 3,
      description: "Collection complète sur l'histoire du christianisme - Édition anniversaire",
      isbn: "978-2-987654-32-1"
    },
    {
      id: 4,
      name: "Stylo plume ZTF - Édition limitée",
      author: null,
      category: "Papeterie",
      price: 15000,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc6e48c?w=300&h=400&fit=crop&q=80",
      rating: 4.5,
      reviews: 43,
      discount: 0,
      inStock: false,
      stock: 0,
      description: "Stylo plume de luxe avec gravure personnalisée possible",
      isbn: null
    },
    {
      id: 5,
      name: "Dictionnaire Biblique Illustré",
      author: "Collectif",
      category: "Livres",
      price: 28000,
      originalPrice: 32000,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&q=80",
      rating: 4.7,
      reviews: 156,
      discount: 12,
      inStock: true,
      stock: 12,
      description: "Plus de 3000 entrées avec illustrations en couleur",
      isbn: "978-2-456789-12-3"
    },
    {
      id: 6,
      name: "Sac de bibliothèque ZTF",
      author: null,
      category: "Accessoires",
      price: 12500,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop&q=80",
      rating: 4.4,
      reviews: 78,
      discount: 0,
      inStock: true,
      stock: 18,
      description: "Sac en toile résistante avec compartiments pour livres et ordinateur",
      isbn: null
    }
  ];

  const categories = [
    { value: 'all', label: 'Tous les produits' },
    { value: 'Livres', label: 'Livres' },
    { value: 'Papeterie', label: 'Papeterie' },
    { value: 'Accessoires', label: 'Accessoires' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Nom' },
    { value: 'price-low', label: 'Prix croissant' },
    { value: 'price-high', label: 'Prix décroissant' },
    { value: 'rating', label: 'Mieux notés' },
    { value: 'discount', label: 'Promotions' }
  ];

  // Filtrage et tri des produits
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.author && product.author.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'discount':
          return b.discount - a.discount;
        default:
          return 0;
      }
    });

  // Gestion du panier
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        style={{ 
          color: i < rating ? '#1d4f8b' : '#34495e',
          fontSize: '0.8rem'
        }}
      />
    ));
  };

  const ProductCard = ({ product }) => (
    <div className="product-card">
      {product.discount > 0 && (
        <div className="discount-badge">-{product.discount}%</div>
      )}
      
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="overlay-btn" title="Aperçu rapide">
            <FaEye />
          </button>
          <button className="overlay-btn" title="Ajouter aux favoris">
            <FaHeart />
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h4 className="product-name">{product.name}</h4>
        {product.author && (
          <p className="product-author">par {product.author}</p>
        )}
        
        <div className="product-rating">
          <div className="stars">{renderStars(product.rating)}</div>
          <span className="rating-text">{product.rating} ({product.reviews})</span>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-price">
          <span className="current-price">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        <div className="product-stock">
          {product.inStock ? (
            <span className="in-stock">En stock ({product.stock} disponible(s))</span>
          ) : (
            <span className="out-of-stock">Rupture de stock</span>
          )}
        </div>

        <div className="product-actions">
          <button 
            className="btn-primary"
            disabled={!product.inStock}
            onClick={() => addToCart(product)}
          >
            <FaShoppingCart size={14} />
            Ajouter au panier
          </button>
          <button className="btn-outline">
            <FaEye size={14} />
            Détails
          </button>
        </div>
      </div>
    </div>
  );

  const CartSidebar = () => (
    <div className={`cart-sidebar ${showCart ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Panier ({cart.length})</h3>
        <button 
          className="close-cart"
          onClick={() => setShowCart(false)}
        >
          ×
        </button>
      </div>

      <div className="cart-content">
        {cart.length > 0 ? (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h5>{item.name}</h5>
                    <div className="item-price">{formatPrice(item.price)}</div>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <FaMinus size={12} />
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </div>
                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-footer">
              <div className="cart-total">
                <strong>Total: {formatPrice(getTotalPrice())}</strong>
              </div>
              <button className="btn-checkout">
                <FaCreditCard size={14} />
                Commander
              </button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <FaShoppingCart size={48} />
            <p>Votre panier est vide</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="shop-content">
      <div className="shop-header">
        <h2>Boutique ZTF</h2>
        <p>Livres, papeterie et accessoires de la bibliothèque</p>
      </div>

      {/* Contrôles */}
      <div className="controls-section">
        <div className="search-filter-group">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="filter-select"
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="action-controls">
          <button
            className="cart-toggle"
            onClick={() => setShowCart(true)}
          >
            <FaShoppingCart />
            Panier ({cart.length})
          </button>
          
          <div className="view-controls">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <FaTh />
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <FaList />
            </button>
          </div>
        </div>
      </div>

      {/* Résultats */}
      <div className="results-info">
        <span>{filteredProducts.length} produit(s) affiché(s)</span>
      </div>

      {/* Grille des produits */}
      {filteredProducts.length > 0 ? (
        <div className={`products-grid ${viewMode}`}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <FaShoppingBag size={48} />
          <h3>Aucun produit trouvé</h3>
          <p>Essayez de modifier vos critères de recherche</p>
        </div>
      )}

      {/* Sidebar du panier */}
      <CartSidebar />
      {showCart && <div className="cart-overlay" onClick={() => setShowCart(false)}></div>}

      <style jsx>{`
        .shop-content {
          padding: 2rem;
          min-height: 600px;
          position: relative;
        }

        .shop-header {
          margin-bottom: 2rem;
        }

        .shop-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .shop-header p {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
        }

        .controls-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .search-filter-group {
          display: flex;
          gap: 1rem;
          flex: 1;
        }

        .search-box {
          position: relative;
          flex: 1;
          max-width: 300px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 0.75rem 0.75rem 2.5rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 0.875rem;
        }

        .search-input:focus {
          outline: none;
          border-color: #1d4f8b;
        }

        .search-input::placeholder {
          color: var(--text-secondary);
        }

        .filter-select {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          color: var(--text-primary);
          font-size: 0.875rem;
          min-width: 150px;
        }

        .filter-select:focus {
          outline: none;
          border-color: #1d4f8b;
        }

        .action-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cart-toggle {
          background: #1d4f8b;
          color: var(--dark-900);
          border: none;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cart-toggle:hover {
          background: #1d4f8b;
        }

        .view-controls {
          display: flex;
          gap: 0.5rem;
        }

        .view-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-btn.active {
          background: #1d4f8b;
          color: white;
          border-color: #1d4f8b;
        }

        .results-info {
          margin-bottom: 2rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .products-grid {
          display: grid;
          gap: 2rem;
        }

        .products-grid.grid {
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }

        .products-grid.list {
          grid-template-columns: 1fr;
        }

        .product-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
        }

        .product-card:hover {
          
          border-color: rgba(29, 79, 139, 0.3);
        }

        .products-grid.list .product-card {
          display: flex;
          align-items: stretch;
        }

        .discount-badge {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          background: #1d4f8b;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 1;
        }

        .product-image {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .products-grid.list .product-image {
          width: 200px;
          height: auto;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .product-card:hover .product-overlay {
          opacity: 1;
        }

        .overlay-btn {
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1d4f8b;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .overlay-btn:hover {
          background: white;
          transform: scale(1.1);
        }

        .product-info {
          padding: 1.5rem;
          flex: 1;
        }

        .product-category {
          background: rgba(60, 107, 139, 0.2);
          color: #3c6b8b;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .product-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .product-author {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .product-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .rating-text {
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .product-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.4;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-price {
          margin-bottom: 0.75rem;
        }

        .current-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1d4f8b;
        }

        .original-price {
          font-size: 1rem;
          color: var(--text-tertiary);
          text-decoration: line-through;
          margin-left: 0.5rem;
        }

        .product-stock {
          margin-bottom: 1.5rem;
        }

        .in-stock {
          color: #1d4f8b;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .out-of-stock {
          color: #1d4f8b;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .product-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #1d4f8b;
          color: white;
          border: none;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          justify-content: center;
        }

        .btn-primary:disabled {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-tertiary);
          cursor: not-allowed;
        }

        .btn-primary:not(:disabled):hover {
          background: #1d4f8b;
          
        }

        .btn-outline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text-secondary);
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .cart-sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: 400px;
          height: 100vh;
          background: var(--bg-secondary);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 1000;
          display: flex;
          flex-direction: column;
        }

        .cart-sidebar.open {
          transform: translateX(0);
        }

        .cart-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }

        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cart-header h3 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .close-cart {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 1.5rem;
          cursor: pointer;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-cart:hover {
          color: var(--text-primary);
        }

        .cart-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
        }

        .cart-item {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cart-item img {
          width: 60px;
          height: 75px;
          object-fit: cover;
          border-radius: 4px;
        }

        .item-details {
          flex: 1;
        }

        .item-details h5 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .item-price {
          color: #1d4f8b;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .quantity-controls button {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          width: 24px;
          height: 24px;
          border-radius: 4px;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .quantity-controls button:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.2);
          color: var(--text-primary);
        }

        .quantity-controls button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .quantity-controls span {
          color: var(--text-primary);
          font-weight: 600;
          min-width: 20px;
          text-align: center;
        }

        .remove-item {
          background: rgba(29, 79, 139, 0.2);
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 4px;
          color: #1d4f8b;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
        }

        .remove-item:hover {
          background: rgba(29, 79, 139, 0.3);
        }

        .cart-footer {
          padding: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cart-total {
          margin-bottom: 1rem;
          text-align: center;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .btn-checkout {
          background: #1d4f8b;
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
        }

        .btn-checkout:hover {
          background: #1d4f8b;
        }

        .empty-cart {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--text-secondary);
        }

        .empty-cart svg {
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }

        .empty-state svg {
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-state h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .empty-state p {
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .controls-section {
            flex-direction: column;
            align-items: stretch;
          }

          .search-filter-group {
            flex-direction: column;
          }

          .search-box {
            max-width: none;
          }

          .action-controls {
            justify-content: space-between;
          }

          .products-grid.list .product-card {
            flex-direction: column;
          }

          .products-grid.list .product-image {
            width: 100%;
            height: 250px;
          }

          .cart-sidebar {
            width: 100%;
          }

          .product-actions {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Shop;