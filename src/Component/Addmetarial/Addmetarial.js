/* eslint-disable no-unused-vars */
import { Tooltip } from "@material-ui/core";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import React, {  useState } from "react";
import { Link } from "react-router-dom";
import AddMetarialForm from "./AddMetarialForm/AddMetarialForm";
import axios from "axios";
var Spinner = require("react-spinkit");


const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },

  input: {
    display: "none",
  },
}));

const Addmetarial = () => {
  const classes = useStyles();
  const [on, setOn] = useState(false);
  const [upload, setUpload] = useState(false);
  const [imageUpload, setImageUpload] = useState(false);
  const [image, setImage] = useState();
  let imgFile;
  const handleFile = (event) => {
    setImageUpload(true);
    const imageData = new FormData();
    imageData.set("key", "f16e0919dbce32c8326397f504a1e7b1");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
        handleFileValidationAndUploading();
        setImageUpload(false);
      })
      .catch(function (error) {
        alert("failed to upload. try again");
      });
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setOn(true);
  };
  const handleDragLeave = (e) => {
    setOn(false);
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();

    imgFile = e.dataTransfer.files[0];
    handleFileValidationAndUploading();
  };
  const handleFileValidationAndUploading = () => {
    setUpload(true);
  };
  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 30px",
            marginBottom: "30px",
          }}
        >
          <Typography
            style={{
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
            }}
            variant="h6"
          >
            Add a Metarial
          </Typography>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Button variant="contained">cancel</Button>
          </Link>
        </div>
        <div style={{ marginBottom: "50px", marginTop: "30px" }}>
          <Grid
            item
            xs={12}
            md={5}
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "auto",
            }}
          >
            <Typography
              style={{ marginRight: "10px", fontWeight: "bold" }}
              variant="subtitle2"
            >
              choose from libary
            </Typography>
            <Typography
              style={{ marginRight: "10px", fontWeight: "bold" }}
              variant="subtitle2"
            >
              choose from board
            </Typography>
            <Typography style={{ fontWeight: "bold" }} variant="subtitle2">
              create
            </Typography>
          </Grid>
        </div>

        <Grid container justifyContent="center">
          <Grid
            onDragOver={(e) => handleDragOver(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e)}
            item
            xs={12}
            md={3}
            style={{
              backgroundColor: "#F6FAFB",
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
              padding: "100px 20px",
              marginBottom: "70px",
              margin: "0 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
             {imageUpload && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Spinner
                  style={{ marginTop: "30px", marginBottom: "10px" }}
                  name="line-spin-fade-loader"
                />
              </div>
            )}
            {image ? (
              <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                
                  <img style={{ height: "150px" }} src={image} alt="" />
                </div>
              </>
            ) : (
              <>
                
                <div>
                  {!upload && !imageUpload? (
                    <span>
                      {on ? (
                        <Typography
                          style={{
                            fontWeight: "600",
                            fontSize: "30px",
                          }}
                          variant="subtitle2"
                        >
                          Release To Upload File
                        </Typography>
                      ) : (
                        <>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              textAlign: "center",
                            }}
                          >
                            <span>
                              <input
                                onChange={handleFile}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                              />
                              <label htmlFor="contained-button-file">
                                <Tooltip title="Add Photo" placement="top">
                                  <ArrowUpwardIcon
                                    style={{
                                      fontSize: "50px",
                                      marginBottom: "15px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </Tooltip>
                              </label>
                            </span>

                            <Typography
                              style={{
                                fontWeight: "600",
                                marginBottom: "15px",
                              }}
                              variant="subitle1"
                            >
                              Add a Metarial
                            </Typography>
                            <Typography style={{}} variant="subtitle2">
                              click on arrow or drag and drop
                            </Typography>
                          </div>
                        </>
                      )}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            style={{
              backgroundColor: "#fff",
              padding: "10px 20px",
              marginBottom: "30px",
              margin: "0 10px",
            }}
          >
            <AddMetarialForm image={image}></AddMetarialForm>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Addmetarial;
