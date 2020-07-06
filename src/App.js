import React from "react";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Acquainted from "./components/Acquainted";
import Users from "./components/Users";
import Form from "./components/Form";
import Footer from "./components/Footer";
import MyProvider from "./context/MyProvider";

function App() {
  return (
    <MyProvider>
      <Navbar />
      <Showcase />
      <Acquainted />
      <Users />
      <Form />
      <Footer />
    </MyProvider>
  );
}

export default App;
