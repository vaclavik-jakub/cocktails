import React, { useState } from 'react';
import CocktailList from './CocktailList';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

const CocktailSearch: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchCocktails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error("Chyba při načítání koktejlů:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Vyhledávač koktejlů</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Napište název koktejlu"
      />
      <button onClick={searchCocktails} disabled={loading}>
        {loading ? 'Načítání...' : 'Vyhledat'}
      </button>
      <CocktailList cocktails={cocktails} />
    </div>
  );
};

export default CocktailSearch;
