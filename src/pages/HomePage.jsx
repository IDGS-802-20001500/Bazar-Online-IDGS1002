import { useForm } from "react-hook-form";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    navigate(`/items/?search=${data.search}`);
  };

  return (
    <div className="contenedor">
      <i
        className="fa-solid fa-bag-shopping mb-3"
        style={{ color: "#ef6129", fontSize: "50px" }}
      ></i>
      <h1>Bazar Online</h1>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row" id="formulario">
          <div className="col-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="search"
              {...register("search")}
              style={{ borderRadius: "20px", width: "100%" }}
            />
          </div>
          <div className="col-sm col-md col-lg d-flex justify-content-center">
            <input
              type="submit"
              className="btn"
              id="btnSearch"
              value="Buscar"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
