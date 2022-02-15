import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form>
      <input type="text" placeholder="Buscar Producto..." />
      <button className="button-main btn-search">Buscar</button>
    </form>
  );
};

export default Form;
