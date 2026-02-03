import styles from "../app.module.css";
import { categories } from "../utils/categories";
import { Category } from "../components/common/Category";

export const Index = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>Fragancias que definen tu estilo</h1>
        <p>Perfumes, desodorantes y aromas premium para cada momento</p>
        <button className={styles.cta}>Ver productos</button>
      </main>
      <section>
        <h3>Categorias</h3>
        <aside className={styles.cardContainer}>
          {categories.map((c) => (
            <Category category={c.category} image={c.image} />
          ))}
        </aside>
      </section>
    </>
  );
};
