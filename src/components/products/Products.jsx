import React, { useState, useEffect } from 'react';
import './products.css'
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className='products_container'>
      {products.map(product => (
        <div className='product_box'key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <span className="price_tag">Preço: <span className='green_price'>R${product.price}</span></span>
          <p>Avaliação: {product.rating.rate}/5 ({product.rating.count} Avaliações)</p>
          <div>
          <button className='btn' type="submit">Comprar</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;