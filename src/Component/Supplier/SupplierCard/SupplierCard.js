import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import "./SupplierCard.css";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const SupplierCard = ({ element,fullDetails,handleFullDetails }) => {
 
 

  const classes = useStyles();
  return (
    <>
      {!fullDetails.title ? (
        <Grid item xs={12} md={3} sm={6}>
          <Card
            onClick={() => handleFullDetails(element)}
            className={classes.root}
          >
            <CardActionArea>
              <CardMedia
                style={{ height: "300px", width: "100%" }}
                className={classes.media}
                image={element.img}
                title="industry Img"
              />
              <CardContent>
                <Typography
                  style={{ height: "100px", textTransform: "capitalize" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {element.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {element.location}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </Grid>
      ) : (
        <>
           
          
         
        </>
      )}
    </>
  );
};

export default SupplierCard;
