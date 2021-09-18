import React from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const OptionComponent = ({ handleOptionSubmitBtn, step, setMainData }) => {
  const data = [...step.options];
  const handleOption = (e) => {
    setMainData(e.currentTarget.textContent);
  };

  return (
    <div
      style={{ color: "white", margin: "auto", padding: "0px 30px" }}
      className="stepContent"
    >
      <Typography
        style={{ paddingBottom: "30px", textTransform: "capitalize" }}
        variant="h5"
        component="h2"
      >
        {step.title}
      </Typography>
      {data.map((option) => (
        <p onClick={(e) => handleOption(e)}>
          <Button className="optionBtn" variant="outlined">
            {option}
          </Button>
        </p>
      ))}
      <div style={{ paddingTop: "20px" }}>
        <Button onClick={handleOptionSubmitBtn} variant="contained">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default OptionComponent;
