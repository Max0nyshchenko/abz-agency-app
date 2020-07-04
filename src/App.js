import React from "react";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Acquainted from "./components/Acquainted";
import Users from "./components/Users";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Acquainted />
      <Users />
      <Form />
    </>
  );
}

export default App;
