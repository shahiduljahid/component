import { Box, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import banner from "../../photos/banner.jpg";
import Button from "@material-ui/core/Button";
import "./BuyerRegistration.css";
import OptionComponent from "./OptionComponent";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const BuyerRegistration = () => {
  const [userInfo, setUserInfo] = useState({
    category: "",
    team: "",
    targetedBuyer: "",
    productLine: "",
    priceRange: "",
    coreFactorOfSourcing: "",
    name: "",
    email: { firstEmail: "", secondEmail: "" },
    address: { city: "", region: "", country: "" },
    phoneNumber: "",
  });
  const [fullPage, setFullPage] = useState(false);
  const [textField, setTextField] = useState(false);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  //handle  selected option states
  const [team, setTeam] = useState("");
  const [buyer, setBuyer] = useState("");
  const [myProductType, setProductType] = useState("");
  const [myPriceRange, setMyPriceRange] = useState("");
  const [coreFactor, setCoreFactor] = useState("");

  // handle steps states //
  const [step, setStep] = useState(0);
  const handleOption = (e) => {
    userInfo.category = e.currentTarget.textContent;
    setUserInfo(userInfo);
    if (e.currentTarget.textContent === "Others") {
      setTextField(true);
    } else {
      setTextField(false);
    }
  };
  const handleCountry = (e) => {
    setCountry(e);
  };
  const handleRegion = (e) => {
    setRegion(e);
  };
  const handlePhoneNumber = (e) => {
    userInfo.phoneNumber = e;
    setUserInfo(userInfo);
  };

  const handleInputValues = (e) => {
    if (e.target.name === "category") {
      userInfo.category = e.target.value;
      setUserInfo(userInfo);
    }
    if (e.target.name === "name") {
      userInfo.name = e.target.value;
      setUserInfo(userInfo);
    }
    if (e.target.name === "email") {
      let inputFieldValid = true;

      inputFieldValid =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          e.target.value
        );

      if (inputFieldValid === true) {
        userInfo.email.firstEmail = e.target.value;
        setUserInfo(userInfo);
      }
      if (inputFieldValid === false) alert("Email address in not valid");
    }
    if (e.target.name === "city") {
      userInfo.address.city = e.target.value;
      setUserInfo(userInfo);
    }
    if (e.target.name === "secondaryEmail") {
      if (e.target.value !== "") {
        let inputFieldValid = true;

        inputFieldValid =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            e.target.value
          );

        if (inputFieldValid === true) {
          userInfo.email.secondEmail = e.target.value;
          setUserInfo(userInfo);
        }
        if (inputFieldValid === false) alert("Email address in not valid");
      }
    }
  };

  // handle selected data and pushing them into info object
  const handleCategory = () => {
    if (userInfo.category === "") {
      alert("please select One category");
    } else {
      setStep(1);
    }
  };
  const handleTeam = () => {
    if (team === "") {
      alert("please select One");
    } else {
      setStep(2);
      userInfo.team = team;
      setUserInfo(userInfo);
    }
  };
  const handleTargetedBuyer = () => {
    if (buyer === "") {
      alert("please select One");
    } else {
      setStep(3);
      userInfo.targetedBuyer = buyer;
      setUserInfo(userInfo);
    }
  };

  const handleProductType = () => {
    if (myProductType === "") {
      alert("please select One");
    } else {
      setStep(4);
      userInfo.productLine = myProductType;
      setUserInfo(userInfo);
    }
  };
  const handlePriceRange = () => {
    if (myPriceRange === "") {
      alert("please select One");
    } else {
      setStep(5);
      userInfo.priceRange = myPriceRange;
      setUserInfo(userInfo);
    }
  };
  const handleCoreFactor = () => {
    if (coreFactor === "") {
      alert("please select One");
    } else {
      setStep(6);
      userInfo.coreFactorOfSourcing = coreFactor;
      setUserInfo(userInfo);
    }
  };
  const handleInputName = () => {
    if (userInfo.name === "") {
      alert("Name can not be empty");
    } else {
      setStep(7);
    }
  };
  const handleInputEmail = () => {
    if (userInfo.email === "") {
      alert("Email can not be empty");
    } else {
      setStep(8);
    }
  };
  const handleAddress = () => {
    if (country && region && userInfo.address.city) {
      userInfo.address.country = country;
      userInfo.address.region = region;
      setUserInfo(userInfo);
      setStep(9);
    } else {
      if (country === "") alert("country can not be empty");
      if (region === "") alert("region can not be empty");
      if (userInfo.address.city === "") alert("city name can not be empty");
    }
  };
  const handleSecondaryInfo = () => {
    setStep(10);
  };

  console.log(userInfo);

  //option data
  const teamOption = {
    title: "How big is your team ?",

    options: [
      "I am a one man Army",

      "I have a squad of 1-10",

      "My team is 11-50 members strong",

      "My Organization has more than 50+ members",
    ],
  };
  const targetedBuyers = {
    title: "Who Do You Sell Your Product to?",

    options: [
      "People who want would prefer luxurious apparel",

      "People who would want to buy cheap but in volume",

      "People who prefer fast fashion",

      "People who want to buy cheap and easy products",
      "People who would prefer sustainability over everything ",
      "Others",
    ],
  };
  const productTypes = {
    title: "What's Your Product Line ?",

    options: [
      "Prefer making Shirts T-Shirts, Tops, Tanks and Products Similar to that",

      "I Prefer making sweaters, jumpers, Trench Coat, Suits and Products akin to that.",

      "I usually make lingerie, Socks, Pajama, Shawl, Hat Bikini and products like that",

      "I make accessories like Button, Belt, Fabrics and materials like that",

      "Others",
    ],
  };
  const priceRange = {
    title: "What's the Price Range you Operate in ?",

    options: [
      "Discount Clothing",

      "Value for Money Apparel",

      "Mid-Market",

      "Mass Market which is High End",
      "Luxury Market which is High End",

      "Others",
    ],
  };
  const coreFactorOfSourcing = {
    title: "What do you think is the core factor of sourcing ?",

    options: [
      "Cost should be the most important element",

      "Sustainability is my Core factor while sourcing",

      "I Prefer sourcing experience with high product development capabilities",

      "I need faster delivery and lower lead time",

      "Others",
    ],
  };

  return (
    <Box>
      {!fullPage ? (
        <Grid container>
          <Grid className="introPicture" item xs={12} sm={4}>
            <img
              style={{ height: "100vh", width: "100%" }}
              src={banner}
              alt="banner"
            />
          </Grid>

          <Grid
            className="bannerContainer"
            style={{ display: "flex", alignItems: "center" }}
            item
            xs={12}
            sm={8}
          >
            <div
              style={{ color: "white", padding: "0px 50px" }}
              className="stepContent"
            >
              <Typography
                style={{ paddingBottom: "20px" }}
                variant="h5"
                component="h2"
              >
                Hey there !! Excited to see you interested in our platform.
                Every single of us is here to help you reach new heights with
                your sourcing experience. For that we would like to introduce
                ourselves and get to know you better!
              </Typography>

              <Button onClick={() => setFullPage(true)} variant="contained">
                OK, Let's Continue
              </Button>
            </div>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid
            className="bannerContainer"
            style={{ display: "flex", alignItems: "center" }}
            item
            xs={12}
          >
            {step === 0 && (
              <div
                style={{ color: "white", margin: "auto", padding: "0px 30px" }}
                className="stepContent"
              >
                <Typography
                  style={{ paddingBottom: "30px", textTransform: "capitalize" }}
                  variant="h5"
                  component="h2"
                >
                  How would you categorize yourself?
                </Typography>

                <p onFocus={(e) => handleOption(e)}>
                  <Button className="optionBtn" variant="outlined">
                    I have a personal Label Brand
                  </Button>
                </p>
                <p onFocus={(e) => handleOption(e)}>
                  <Button className="optionBtn" variant="outlined">
                    I am an Apparel Printer
                  </Button>
                </p>
                <p onFocus={(e) => handleOption(e)}>
                  <Button className="optionBtn" variant="outlined">
                    I am a Dedicated Wholesale Distributor
                  </Button>
                </p>

                <p onFocus={(e) => handleOption(e)}>
                  <Button className="optionBtn" variant="outlined">
                    Others
                  </Button>
                </p>

                {textField && (
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="otherTextFld"
                  >
                    <input
                      onChange={(e) => handleInputValues(e)}
                      name="category"
                      style={{ marginBottom: "40px", padding: "15px 5px" }}
                      placeholder="write your category"
                    />
                  </form>
                )}
                <div style={{ paddingTop: "20px" }}>
                  <Button onClick={handleCategory} variant="contained">
                    Continue
                  </Button>
                </div>
              </div>
            )}
            {step === 1 && (
              <OptionComponent
                handleOptionSubmitBtn={handleTeam}
                step={teamOption}
                setMainData={setTeam}
              ></OptionComponent>
            )}
            {step === 2 && (
              <OptionComponent
                handleOptionSubmitBtn={handleTargetedBuyer}
                step={productTypes}
                setMainData={setBuyer}
              ></OptionComponent>
            )}
            {step === 3 && (
              <OptionComponent
                handleOptionSubmitBtn={handleProductType}
                step={targetedBuyers}
                setMainData={setProductType}
              ></OptionComponent>
            )}
            {step === 4 && (
              <OptionComponent
                handleOptionSubmitBtn={handlePriceRange}
                step={priceRange}
                setMainData={setMyPriceRange}
              ></OptionComponent>
            )}

            {step === 5 && (
              <OptionComponent
                handleOptionSubmitBtn={handleCoreFactor}
                step={coreFactorOfSourcing}
                setMainData={setCoreFactor}
              ></OptionComponent>
            )}
            {step === 6 && (
              <div
                style={{ color: "white", margin: "auto", padding: "0px 30px" }}
                className="inputContent"
              >
                <Typography
                  style={{ paddingBottom: "30px", textTransform: "capitalize" }}
                  variant="h5"
                  component="h2"
                >
                  What would you want your profile name to be ?
                </Typography>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="inputTextFld"
                >
                  <input
                    onChange={(e) => handleInputValues(e)}
                    name="name"
                    style={{ marginBottom: "40px", padding: "15px 5px" }}
                    placeholder="Enter your name here"
                    type="text"
                    required
                  />
                </form>

                <div style={{ paddingTop: "20px" }}>
                  <Button
                    type="submit"
                    onClick={handleInputName}
                    variant="contained"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
            {step === 7 && (
              <div
                style={{ color: "white", margin: "auto", padding: "0px 30px" }}
                className="inputContent"
              >
                <Typography
                  style={{ paddingBottom: "30px", textTransform: "capitalize" }}
                  variant="h5"
                  component="h2"
                >
                  What is your mail address?
                </Typography>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="inputTextFld"
                >
                  <input
                    onBlur={(e) => handleInputValues(e)}
                    name="email"
                    type="email"
                    style={{ marginBottom: "40px", padding: "15px 5px" }}
                    placeholder="Enter your email here"
                    required
                  />
                </form>

                <div style={{ paddingTop: "20px" }}>
                  <Button
                    type="submit"
                    onClick={handleInputEmail}
                    variant="contained"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
            {step === 8 && (
              <div
                style={{ color: "white", margin: "auto", padding: "0px 30px" }}
                className="inputContent"
              >
                <Typography
                  style={{ paddingBottom: "30px", textTransform: "capitalize" }}
                  variant="h5"
                  component="h2"
                >
                  Where are you Based?
                </Typography>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="inputTextFld"
                >
                  <CountryDropdown
                    placeholder=""
                    style={{
                      display: "block",
                      marginBottom: "20px",
                      padding: "15px 5px",
                    }}
                    value={country}
                    onChange={handleCountry}
                  />
                  {country && (
                    <RegionDropdown
                      style={{
                        display: "block",
                        marginBottom: "20px",
                        padding: "15px 5px",
                      }}
                      country={country}
                      value={region}
                      onChange={handleRegion}
                    />
                  )}

                  {region && (
                    <input
                      onChange={(e) => handleInputValues(e)}
                      name="city"
                      type="text"
                      style={{ marginBottom: "20px", padding: "15px 5px" }}
                      placeholder="city"
                      required
                    />
                  )}
                </form>

                <div style={{ paddingTop: "20px" }}>
                  <Button
                    type="submit"
                    onClick={handleAddress}
                    variant="contained"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
            {step === 9 && (
              <div
                style={{ color: "white", margin: "auto", padding: "0px 30px" }}
                className="inputContent"
              >
                <Typography
                  style={{ paddingBottom: "30px", textTransform: "capitalize" }}
                  variant="h5"
                  component="h2"
                >
                  Your Secondary Contact Information ?
                </Typography>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="inputTextFld"
                >
                  <input
                    onBlur={(e) => handleInputValues(e)}
                    name="secondaryEmail"
                    type="email"
                    style={{ marginBottom: "40px", padding: "15px 5px" }}
                    placeholder="Enter your email address  (Optional)"
                    required
                  />
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={userInfo.phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </form>

                <div style={{ paddingTop: "20px" }}>
                  <Button
                    type="submit"
                    onClick={handleSecondaryInfo}
                    variant="contained"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
            {step === 10 && (
              <h1
                style={{ color: "white", margin: "auto", padding: "0px 30px" }}
                className="stepContent"
              >
                Thanks for Registration
              </h1>
            )}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default BuyerRegistration;
