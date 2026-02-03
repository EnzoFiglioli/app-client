import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../@types";
import productService from "../services";
import style from "./ProductDetail.module.css";
import { formatter } from "../utils/formatteRegex";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  

  useEffect(() => {
    if (!id) return;

    const fetchItem = async () => {
      const response = await productService.getById(id);
      setProduct(response);
    };

    fetchItem();
  }, [id]);

  if (!product) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  return (
  <div className={style.container}>
    <figure className={style.media}>
      <img
        className={style.image}
        src={product.pictures[0]}
        alt={product.name}
        loading="lazy"
      />
    </figure>

    <section className={style.details}>
      <header className={style.header}>
        <h1 className={style.title}>{product.name}</h1>
        <span className={style.price}>${product.price}</span>
      </header>

      <article
        className={style.description}
        dangerouslySetInnerHTML={{
          __html: formatter(product.description),
        }}
      />

      <div className={style.actions}>
        <button className={style.primary}>Agregar al carrito</button>
        <button className={style.secondary}>Comprar ahora</button>
      </div>
    </section>
  </div>
);
};

export default ProductDetail;
