import "./Stars.css";

const Stars = ({ rating }) => {
  const numStars = 5;
  const fullStars = Math.floor(rating);
  const remainder = rating - fullStars;

  const starElements = [];

  // Agregar estrellas completas
  for (let i = 0; i < fullStars; i++) {
    starElements.push(
      <i key={i} className="fa-solid fa-star" style={{ color: "#ef6129" }}></i>
    );
  }

  // Agregar estrella parcial (si hay remainder)
  if (remainder > 0) {
    starElements.push(
      <i
        key="partial-star"
        className="fa-solid fa-star-half"
        style={{ color: "#ef6129" }}
      ></i>
    );
  }

  // Agregar estrellas vacías para completar hasta 5
  for (let i = fullStars + 1; i < numStars; i++) {
    starElements.push(
      <i
        key={i}
        className="fa-regular fa-star"
        style={{ color: "#ef6129" }}
      ></i>
    );
  }

  return <div>{starElements}</div>;
};

export default Stars;
