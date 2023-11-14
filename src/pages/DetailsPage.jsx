import { useParams } from "react-router-dom";
import "./DetailsPage.css";
import BarraBusqueda from "../components/BarraBusqueda";
import Stars from "../components/Stars";
import { useState, useEffect } from "react";

const DetailsPage = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:7075/api/items/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="contendorD">
      <BarraBusqueda />
      <div className="contenedorD2">
        {data && (
          <div>
            <div className="carrusel mb-3">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  {JSON.parse(data.images).map((image, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <img
                        src={image}
                        className="d-block w-100"
                        alt="..."
                        id="imgCarrusel"
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="detalles">
              <h2>{data.title}</h2>
              <h6>{data.category}</h6>
              <br />
              <div className="descD">
                <p>{data.description}</p>
              </div>
              <div className="row">
                <div className="col">
                  <p>${data.price}</p>
                </div>
                <div className="col">
                  <Stars rating={data.rating} />
                </div>
              </div>
              <br />
              <div className="d-flex justify-content-center">
                <button className="btn btn-success" id="btnComprar">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
