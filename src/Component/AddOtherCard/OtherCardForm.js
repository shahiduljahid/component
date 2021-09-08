import { Button, Grid, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { OtherCardContext } from "../../App";
const OtherCardForm = ({image}) => {
  const [otherCard,setOtherCard] = useContext(OtherCardContext);
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    if (!image) alert("please upload a image");

    if (image) {
      const OtherCardData = {
        otherCardImg: image,
        otherCardName: data.name,
        description: data.description,
      };
     
      const newOtherCard = [...otherCard];
      newOtherCard.push(OtherCardData);
      setOtherCard(newOtherCard);
      history.push("/");

      reset();
    }
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          style={{ marginBottom: "20px" }}
          {...register("name")}
          label="Name"
          required
        />
        
       <TextField
          {...register("description")}
          style={{ marginBottom: "40px" }}
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
            Add
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default OtherCardForm;
