function Button({ fontSize = 20, text }) {
  console.log("child component now rendered");
  return (
    <button
      style={{
        background: "dodgerblue",
        color: "white",
        border: "none",
        borderRadius: "10px",
        padding: "0.6em",
        fontSize,
      }}
    >
      변경
    </button>
  );
}

export default Button;
