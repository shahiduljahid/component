import { Button, Grid, TextField } from "@material-ui/core";
import React, { useContext }  from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { ComponentContext} from "../../../App";




const ComponentForm = ({image}) => {
 

 const [component,setComponent] = useContext(ComponentContext)
 
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data, e) => {
    if (!image) alert("please upload a image");

    if (image) {
      const componentData = {
        componentImg: image,
        componentName: data.componentName,
        composition: data.composition,
        diementionNotes: data.diementionNotes,
        description: data.description,
      };
     
      const newComponent = [...component];
     
      newComponent.push(componentData);
      setComponent(newComponent);
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
          style={{ marginBottom: "20px" ,padding:'15px 0' }}
          {...register("componentName")}
          label="Component Name"
          required
        />
        
        <TextField
          style={{ marginBottom: "20px" ,padding:'15px 0' }}
          {...register("composition")}
          label="Composition"
        />
        <TextField
          style={{ marginBottom: "20px" ,padding:'15px 0' }}
          {...register("diementionNotes")}
          label="Diemention Notes"
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
            Add
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default ComponentForm;
