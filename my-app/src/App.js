import React from 'react';
import {BrowserRouter as Router, Route, Switch , Redirect, Link} from 'react-router-dom';
import './App.scss';
import ProductList from "./componets/ProductList/ProductList";
import ProductCard from "./componets/ProductCard/ProductCard";
import Header from "./componets/Header/Header";

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
                <Route path="/" component={ProductList} exact/>
                <Route path="/productCar" component={ProductCard} exact/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
