import React, { useEffect } from "react";
import Form from "./components/Form";
import InfoModal from "./components/InfoModal";
import About from "./components/About"
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
      <div className="info-bar">
        <InfoModal />
        <About/>
      </div>
      

      <Form />
    </div>
  );
}

export default App;
