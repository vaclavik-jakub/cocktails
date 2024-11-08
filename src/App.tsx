// src/App.tsx
import React from 'react';
import CocktailSearch from './components/CocktailSearch';
import './components/CocktailSearch.module.css';


const App: React.FC = () => {
  return (
    <div>
      <CocktailSearch />
    </div>
  );
};

export default App;
