const styles = {
  card: {
    width: "200px",
    height: "300px",
    borderRadius: "10px",
    overflow: "hidden",
  } as React.CSSProperties,

  bg: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "12px",

    position: "relative",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  } as React.CSSProperties,

  title: {
    color: "#fff",
    fontSize: "1.2rem",
    textAlign: "center",
    zIndex: 1,
    textShadow: "0 2px 6px rgba(0,0,0,0.7)",
    margin: 0,
  } as React.CSSProperties,

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
    zIndex: 0,
  } as React.CSSProperties,
};

export const Category = ({
  image,
  category,
}: {
  image: string;
  category: string;
}) => {
  return (
    <article style={styles.card}>
      <div
        style={{
          ...styles.bg,
          backgroundImage: `url(${image})`,
        }}
      >
        <div style={styles.overlay} />
        <h1 style={styles.title}>{category}</h1>
      </div>
    </article>
  );
};
