import React from 'react';
import styles from '../App/App.module.css';
import { ProductCard } from '../ProductCard/ProductCard';

function App() {
  return (
    <div className={styles.App}>
      <ProductCard
        title="Кофеварка"
        origin="Italy"
        price={34900}
        currency="RUB"
        imageUrl="https://cdn.citilink.ru/76u-LGBazjxV_OzzQFz9l3IR1ro30xB4pUTbO0jbXbY/enlarge:1/gravity:sm/height:1200/resizing_type:fit/width:2600/plain/journal/1a5170f2-552d-46fa-b745-6893f28e8226.jpg"
      />
    </div>
  );
}

export default App;
