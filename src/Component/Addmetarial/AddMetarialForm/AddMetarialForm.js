import { Button, Grid, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";

import InputAdornment from "@material-ui/core/InputAdornment";
import { useHistory } from "react-router";
import { MetarialContext } from "../../../App";

const metarialType = [
  {
    value: "Cotton",
  },
  {
    value: "Cotton Blend",
  },
  {
    value: "Recycled Polyester Blend",
  },
  {
    value: "Organic Cotton",
  },
];

const AddMetarialForm = ({ image }) => {
  const [metarial, setMetarial] = useContext(MetarialContext);
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    if (!image) alert("please upload a image");

    if (image) {
      const metarialData = {
        metarialImg: image,
        metarialName: data.metarialName,
        materialType: materialType,
        composition: data.composition,
        weight: data.weight,
        description: data.description,
      };
      setMetarialType("");
      const newMetarial = [...metarial];
      newMetarial.push(metarialData);
      setMetarial(newMetarial);
      history.push("/");

      reset();
    }
  };
  const [materialType, setMetarialType] = React.useState("");

  const handleChange = (event) => {
    setMetarialType(event.target.value);
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          required
          style={{ marginBottom: "20px",padding:'15px 0' }}
          {...register("metarialName")}
          label="Metarial Name"
        />
        <TextField
          style={{ marginBottom: "20px",padding:'15px 0'  }}
          id="standard-select-currency"
          select
          label="Metarial Type"
          value={materialType}
          onChange={handleChange}
          required
        >
          {metarialType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ marginBottom: "20px" ,padding:'15px 0' }}
          {...register("composition")}
          label="Composition"
        />
        <Input
          {...register("weight")}
          style={{ marginBottom: "20px" ,padding:'15px 0' }}
          id="standard-adornment-weight"
          placeholder="weight"
          endAdornment={<InputAdornment position="end">gsm</InputAdornment>}
          aria-describedby="standard-weight-helper-text"
        />
        <TextField
          {...register("description")}
          style={{ marginBottom: "40px" ,padding:'15px 0' }}
          {...register("description")}
          label="Description"
        />
        <Grid item xs={3}>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#388e3c" }}
            color="primary"
          >
            save
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default AddMetarialForm;
