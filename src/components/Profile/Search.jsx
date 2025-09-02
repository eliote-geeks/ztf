import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/catalogue/advanced');
  }, [navigate]);

  return null;
};

export default Search;