export default function SignIn() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log({ email, password });
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Iniciar sesión</h2>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            required
            placeholder="ejemplo@email.com"
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Contraseña
          <input
            type="password"
            name="password"
            required
            placeholder="********"
            style={styles.input}
          />
        </label>

        <button type="submit" style={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    marginTop: "120px",
    display: "flex",
    justifyContent: "center",
  },
  form: {
    width: "320px",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    marginBottom: "8px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
    gap: "6px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#111",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
