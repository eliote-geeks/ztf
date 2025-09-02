import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/catalogue');
  }, [navigate]);

  return null;
};

export default Shop;