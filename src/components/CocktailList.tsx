// src/components/CocktailList.tsx
import React from 'react';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface CocktailListProps {
  cocktails: Cocktail[];
}

const CocktailList: React.FC<CocktailListProps> = ({ cocktails }) => {
  if (cocktails.length === 0) {
    return <p>Žádné koktejly k zobrazení.</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cocktails.map((cocktail) => (
        <div key={cocktail.idDrink} style={{ margin: '10px', textAlign: 'center' }}>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
          <p>{cocktail.strDrink}</p>
        </div>
      ))}
    </div>
  );
};

export default CocktailList;
