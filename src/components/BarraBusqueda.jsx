import "./BarraBusqueda.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const BarraBusqueda = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate(`/items/?search=${data.search}`);
    //Recargar la pagina
    window.location.reload();
  };

  return (
    <div className="barraBusq">
      <div className="logo">
        <a href="/">
          <i
            className="fa-solid fa-bag-shopping mb-3"
            style={{ color: "#ef6129", fontSize: "35px" }}
          ></i>
        </a>
      </div>
      <div className="inputBusqueda">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group mb-3" id="barraInput">
            <button className="btn" id="btnBuscar">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              type="text"
              className="form-control"
              style={{ borderRadius: "0px 20px 20px 0px" }}
              placeholder="search"
              {...register("search")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BarraBusqueda;
