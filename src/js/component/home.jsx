import React, { useState } from "react";

const Home = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  return (
    <>
      <div className="Home">
        <input
          type="text"
          value={""}
          onChange={(e) => setItem(e.target.value)}
        />
        <button> Nueva Tarea </button>
        <ul></ul>
      </div>
    </>
  );
};
export default Home;
