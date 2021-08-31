import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import ProductDetails from "./Component/ProductDetails/ProductDetails";
import productImg from "./photos/4Asset 5sij.png"
import garmentImg from "./photos/garment.jpg"
import industryImg from "./photos/china.gif"
import Suplier from "./Component/Supplier/Suplier";
import Certificate from "./photos/certificate.jpg"

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
  const supliers =[{
    img:garmentImg,
    title:'Alec Garments limited',
    location:'Dhaka,Bangladesh',
    fullAddress:'Kachpur,Narayangonj,Dhaka,Bangladesh',
    certificateImg:''
  },
{
  img:industryImg,
    title:'xianshui Talent knitting Garment Co. limited',
    location:'shandong,china',
    fullAddress:'yantai,Laishan,shandong,china',
    certificateImg:Certificate

}]

  return (
    <div>
      <Router>
        <Switch>
          
          <Route path="/">
           <Suplier suplier={supliers}></Suplier>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
