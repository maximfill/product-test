import React from 'react';
import styles from './ProductCard.module.css';

type Currency = 'RUB' | 'USD' | 'EUR';

interface ProductCardProps {
  title: string;
  origin: string;
  price: number;
  currency: Currency;
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl
}) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(price / 100);

  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={title} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h2>{title}</h2>
        <p>Made in: {origin}</p>
        <p>{formattedPrice}</p>
      </div>
    </div>
  );
};