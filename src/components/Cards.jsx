import "./Cards.css";
import Stars from "./Stars";
import { useNavigate } from "react-router-dom";

const Cards = ({
  id,
  titleProp,
  description,
  category,
  price,
  rating,
  thumbnail,
}) => {
  const navigate = useNavigate();

  const detalles = () => {
    console.log({ id });
    navigate(`/items/${id}`);
  };

  return (
    <div className="card mb-3" onClick={detalles}>
      <div className="tarjeta">
        <div className="imagenT">
          <img src={thumbnail} alt={titleProp} className="imgT" />
        </div>
        <div className="informacion">
          <div className="row">
            <div className="contendorSup col-sm-12">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-12">
                  <h6 className="tituloT">{titleProp}</h6>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-12">
                  <p className="categoriaT">{category}</p>
                </div>
              </div>
            </div>
            <div className="descripcionT col-sm-12">
              <p>{description}</p>
            </div>
            <div className="row contenedorInf">
              <div className="col-sm-12 col-md-6 col-lg-12">
                <p className="precioT">${price}</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-12">
                <Stars rating={rating} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
