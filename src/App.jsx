import React, { useState } from "react";
import Form from "./componentes/Form";
import "./style/App.css";

function App() {
  const [data, setData] = useState("");
  console.log(data);

  return (
    <>
      <Form setData={setData} />
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Michael Diaz</a>.
      </div>
    </>
  );
}

export default App;
