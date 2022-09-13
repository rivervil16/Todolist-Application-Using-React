import { element } from "prop-types";
import React, { useState } from "react";

const Home = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const agregarTareas = (e) => {
    e.preventDefault();
    let tempList = [...list];
    tempList.push(item);
    setList(tempList);
    setItem("");
  };
  const addItem = (e) =>{
    setItem(e.target.value);
  };
  const deleteItem = (indice) =>{
    let listDeleted = list.filter(
      (itemTarea, posicion) => posicion !== indice );
      setList(listDeleted);
  };


  return (
    <>
      <div className="Home container">
        <form onSubmit={agregarTareas}>
        <input
          placeholder="agrega tu tarea aqui"
          type="text"
          value={item}
          onChange={addItem}
        />
        </form>
        <li>
          {list.map((element, indice) => (
            <li className="list-group-item d-flex" key={indice}>
              <p>{element}</p>
              <button onClick={() => 
              deleteItem(indice)}>
            X
              </button>
            </li>
          )

          )}
        </li>
      </div>
    </>
  );
};
export default Home;
