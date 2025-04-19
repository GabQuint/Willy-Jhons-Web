import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const SearchComponent = () => {
  // eslint-disable-next-line no-unused-vars
  const [mostrarInput, setMostrarinput] = useState(false);
  return (
    <>
      <div className="containerForm">
        <form>
          <CiSearch className="searchIcon" />
          <input type="text" className="search" placeholder="Buscar..." />
        </form>
      </div>
    </>
  );
};
