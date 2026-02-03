import { useEffect, useState } from "react";
import type { Product } from "../../@types";
import { getAllProducts } from "../../services";
import styles from "../../page/Products.module.css";
import { Link, type ErrorResponse } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .catch((err: ErrorResponse) =>
        console.error("Error fetching products:", err),
      );
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Nuestros productos</h2>

      <div className={styles.grid}>
        {products.map((product) => (
          <article key={product.id} className={styles.card}>
            <Link
              className={styles.button}
              to={`/products/${product.id}`}
              style={{ background: "transparent" }}
            >
              <picture className={styles.picture}>
                <img
                  src={product.pictures[0]}
                  alt={product.name}
                  className={styles.image}
                />

                <span className={styles.category}>{product.category}</span>
              </picture>

              <div>
                <div className={styles.info}>
                  <h3 style={{ fontSize: "1rem", color:'#1d1d1d' }}>{product.name}</h3>
                  <p className={styles.price}>${product.price}</p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
