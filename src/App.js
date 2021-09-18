/* eslint-disable no-unused-vars */
import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import productImg from "./photos/4Asset 5sij.png";
import garmentImg from "./photos/garment.jpg";
import industryImg from "./photos/china.gif";
import Suplier from "./Component/Supplier/Suplier";
import Certificate from "./photos/certificate.jpg";
import TechPack from "./Component/TechPack/TechPack";
import Addmetarial from "./Component/Addmetarial/Addmetarial";
import AddComponent from "./Component/AddComponent/AddComponent";
import AddOtherCard from "./Component/AddOtherCard/AddOtherCard";
import dress from "./photos/dress.jpg";
import BuyerRegistration from "./Component/BuyerRegistratio/BuyerRegistration";
export const MetarialContext = createContext();
export const ComponentContext = createContext();
export const OtherCardContext = createContext();

function App() {
  const productDetails = {
    modelName: "FRk-008",
    img: productImg,
    description:
      "LightWeight Single jersey Cotton Fabric(eg.for T-shirt,underWare,etc.)",
    material: "Fabric & Lining",
    type: "Main Fabric",
    weight: "115gsm",
    size: "200kg",
    color: "Off White",
    composition: "100% cotton",
    additionalInformation:
      "This lightweight single jersey fabric is perfect for t-shirt,underware,etc.",
  };
  const supliers = [
    {
      img: garmentImg,
      title: "Alec Garments limited",
      location: "Dhaka,Bangladesh",
      fullAddress: "Kachpur,Narayangonj,Dhaka,Bangladesh",
      certificateImg: "",
    },
    {
      img: industryImg,
      title: "xianshui Talent knitting Garment Co. limited",
      location: "shandong,china",
      fullAddress: "yantai,Laishan,shandong,china",
      certificateImg: Certificate,
    },
  ];
  const [metarial, setMetarial] = useState([]);
  const [component, setComponent] = useState([]);
  const [otherCard, setOtherCard] = useState([]);
  return (
    <MetarialContext.Provider value={[metarial, setMetarial]}>
      <ComponentContext.Provider value={[component, setComponent]}>
        <OtherCardContext.Provider value={[otherCard, setOtherCard]}>
          <div>
            <Router>
              <Switch>
                <Route path="/addmetarial">
                  <Addmetarial></Addmetarial>
                </Route>
                <Route path="/addcomponent">
                  <AddComponent></AddComponent>
                </Route>
                <Route path="/addOtherCard">
                  <AddOtherCard></AddOtherCard>
                </Route>

                <Route path="/">
                  {/* <Suplier suplier={supliers}></Suplier> */}
                  {/* <TechPack></TechPack> */}
                  <BuyerRegistration></BuyerRegistration>
                </Route>
              </Switch>
            </Router>
          </div>
        </OtherCardContext.Provider>
      </ComponentContext.Provider>
    </MetarialContext.Provider>
  );
}

export default App;
