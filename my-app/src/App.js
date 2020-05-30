import React from 'react';
import './App.scss';
import Header from "./componets/Header/Header";
import ProductList from "./componets/ProductList/ProductList";

function App() {
  return (
    <div className="App">
        <Header/>
        <ProductList/>
    </div>
  );
}

export default App;
