import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import ProductDetails from "./Component/ProductDetails/ProductDetails";
import productImg from "./photos/4Asset 5sij.png"

function App() {
  const productDetails = {

    modelName:'FRk-008',
    img:productImg,
    description:'LightWeight Single jersey Cotton Fabric(eg.for T-shirt,underWare,etc.)',
    material:'Fabric & Lining',
    type:'Main Fabric',
    weight:'115gsm',
    size:'200kg',
    color:'Off White',
    composition:'100% cotton',
    additionalInformation:'This lightweight single jersey fabric is perfect for t-shirt,underware,etc.'



  };

  return (
    <div>
      <Router>
        <Switch>
          
          <Route path="/">
            <ProductDetails product={productDetails}></ProductDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
