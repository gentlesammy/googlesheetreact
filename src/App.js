import React, { useEffect } from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  //load data from sheet
  useEffect(() => {
    // const getData = async () => {
    //   const res = await fetch(
    //     `${process.env.REACT_APP_GOOGLE_SHEET_LINK}?tabId=sheet1`
    //   );
    //   const data = await res.json();
    //   console.log(data);
    // };
    // getData();
  }, []);
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
