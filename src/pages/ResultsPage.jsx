import { useLocation } from "react-router-dom";
import Cards from "../components/Cards";
import BarraBusqueda from "../components/BarraBusqueda";
import "./ResultPage.css";
import { useState, useEffect } from "react";

const ResultsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search");

  const [data, setData] = useState(null);
  const [resultCount, setResultCount] = useState(0);

  //Creando un contador de los resultados obtenidos

  useEffect(() => {
    fetch(`http://localhost:7075/api/items/search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setResultCount(data.length);
      });
  }, []);

  return (
    <div className="cotenedorResult">
      <BarraBusqueda />
      <br />
      <h6 className="mb-3" id="textoB">
        Resultados de la busqueda de {`${search}`}: {resultCount}
      </h6>
      <br />
      {data?.map((item) => (
        <div key={item.id}>
          <Cards
            id={item.id}
            titleProp={item.title}
            description={item.description}
            category={item.category}
            price={item.price}
            rating={item.rating}
            thumbnail={item.thumbnail}
          />
        </div>
      ))}
    </div>
  );
};

export default ResultsPage;
