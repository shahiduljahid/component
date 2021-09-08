import {
  Avatar,
  Box,
  FormControl,
  Grid,
  makeStyles,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";

import { useForm } from "react-hook-form";
import { blue } from "@material-ui/core/colors";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CreateIcon from "@material-ui/icons/Create";
import React, { useContext, useState } from "react";
import "./TechPack.css";
import dress from "../../photos/dress.jpg";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { Link } from "react-router-dom";
import { ComponentContext, MetarialContext, OtherCardContext } from "../../App";
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
  blue: {
    color: theme.palette.getContrastText(blue[200]),
    backgroundColor: blue[200],
  },

  input: {
    display: "none",
  },
}));

const TechPack = () => {
  //context State
  const [metarial, setMetarial] = useContext(MetarialContext);
  const [component, setComponent] = useContext(ComponentContext);
  const [otherCard, setOtherCard] = useContext(OtherCardContext);
  //context State

  const [variation, setVariation] = React.useState("");
  const [name, setName] = useState("JumpSuit");
  const [quantity, setQuantity] = useState("2");
  const [styleCode, setStyleCode] = useState("sn-232");
  const [box, setBox] = useState(false);
  const [styleSummary, setStyleSummary] = useState(false);
  const [imageUpload, setImageUpload] = useState(false);
  const [image, setImage] = useState([dress]);

  const handleDelete = (element) => {
    const newArray = image.filter((ele) => ele !== element);
    setImage(newArray);
  };

  const handleFile = (event) => {
    setImageUpload(true);
    const imageData = new FormData();
    imageData.set("key", "f16e0919dbce32c8326397f504a1e7b1");

    imageData.append("image", event.target.files[0]);
    axios
      .post(
        "https://api.imgbb.com/1/upload",

        imageData
      )
      .then(function (response) {
        const newImage = [...image];

        newImage.push(response.data.data.display_url);
        setImage(newImage);
        setImageUpload(false);
      })
      .catch(function (error) {
        alert("failed to upload. try again");
      });
  };

  const handleStyleEdit = (e) => {
    setBox(false);
    console.log(e.quantity, e.styleCode);
    if (e.quantity) setQuantity(e.quantity);
    if (e.styleCode) setStyleCode(e.styleCode);

    if (e.quantity || e.styleCode) {
      setStyleSummary(!styleSummary);
    }
  };
  const handleVariationChange = (event) => {
    setVariation(event.target.value);
  };
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    handleBox(data);
    handleStyleEdit(data);
    reset();
  };
  const handleBox = (e) => {
    setStyleSummary(false);
    if (e.name) {
      setName(e.name);
      setBox(!box);
    }
  };

  //handle metarials
  const handleMetarialsDelete = (element) => {
    const newArray = metarial.filter(
      (ele) => ele.metarialImg !== element.metarialImg
    );
    setMetarial(newArray);
  };
  let metarialCount = metarial.length;

  const classes = useStyles();

  //handle Component
  const handleComponentDelete = (element) => {
    const newArray = component.filter(
      (ele) => ele.componentImg !== element.componentImg
    );
    setComponent(newArray);
  };
  let componentCount = component.length;

  //handle Other Card
  const handleOtherCardDelete = (element) => {
    const newArray = otherCard.filter(
      (ele) => ele.otherCardImg !== element.otherCardImg
    );
    setOtherCard(newArray);
  };
  let otherCardCount = otherCard.length;

  //handle save-Delete buttton

  const [yourDesign, setYourDesign] = useState({
    image: [],
    name: "",
    styleId: "",
    styleCode: "",
    quantity: "",
    variation: "",
    unitCost: "",
    metarials: [],
    dimensions: [],
    component: [],
    others: [],
  });

  const handleSave = () => {
    const design = { ...yourDesign };
    design.image = image;
    design.name = name;
    design.styleId ="snd23";
    design.styleCode = styleCode;
    design.quantity = quantity;
    design.variation = "0";
    design.unitCost = "$234";
    design.metarials = metarial;
    design.dimensions = [];
    design.component = component;
    design.others = otherCard;

    setYourDesign(design);
   
  };
  
  return (
    <div style={{ marginTop: "50px" }}>
      <Box
        style={{ backgroundColor: "rgb(128 128 128 / 5%)", padding: "20px" }}
      >
        <Typography
          style={{
            color: "black",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
          }}
          variant="subtitle1"
        >
          <ArrowBackIosIcon style={{ width: "12px" }} />
          back
        </Typography>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Tooltip title="Edit Name" placement="top">
            <CreateIcon
              onClick={() => setBox(!box)}
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
            />
          </Tooltip>
          {!box ? (
            <h2>{name}</h2>
          ) : (
            <div
              style={{ marginTop: "10px", marginLeft: "10px" }}
              noValidate
              autoComplete="off"
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  {...register("name")}
                  id="standard-basic"
                  placeholder="jumpsuit"
                  variant="outlined"
                />
              </form>
            </div>
          )}
          <Avatar
            style={{ width: "20px", height: "20px", marginLeft: "5px" }}
            className={classes.blue}
          >
            <span style={{ color: "white" }}>i</span>
          </Avatar>
        </div>

        <small style={{ color: "grey", marginLeft: "35px" }}>
          style variation
        </small>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Typography
            style={{ marginRight: "10px", marginTop: "40px" }}
            variant="subtitle2"
          >
            Show:
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              style={{ width: "200px" }}
              value={variation}
              onChange={handleVariationChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <Typography style={{ marginLeft: "10px" }} variant="subtitle1">
                  All Varition
                </Typography>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid style={{ marginTop: "30px" }} container spacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            {image.map((ele) => {
              return (
                <div
                  style={{
                    backgroundColor: "#fff",
                    marginBottom: "20px",

                    boxShadow:
                      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                    padding: "10px",
                  }}
                >
                  <Tooltip title="Delete" placement="top">
                    <DeleteIcon
                      onClick={() => handleDelete(ele)}
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        marginLeft: "auto",
                        marginTop: "20px",
                        marginRight: "22px",
                        marginBottom: "20px",
                        fontSize: "30px",
                        color: "grey",
                      }}
                    />
                  </Tooltip>
                  <img
                    src={ele}
                    style={{ width: "100%", height: "300px" }}
                    alt="dressImg"
                  />
                </div>
              );
            })}
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

            <div style={{ marginTop: "50px" }}>
              <div style={{ display: "flex" }}>
                {image.map((ele) => {
                  return (
                    <img
                      src={ele}
                      style={{
                        height: "50px",
                        margin: "0px 5px",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                      alt="dressImg"
                    />
                  );
                })}

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
                    <AddIcon
                      style={{
                        cursor: "pointer",
                        margin: "0 10px",
                        backgroundColor: " rgb(128 128 128 / 15%)",
                        padding: "1px 5px",
                        borderRadius: "2px",

                        fontSize: "50px",
                        textAlign: "left",
                      }}
                    />
                  </Tooltip>
                </label>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                marginBottom: "100px",
                padding: "5px 10px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                varient="div"
              >
                <Typography style={{ fontWeight: "bold" }} variant="h6">
                  Style Summary
                </Typography>
                <Tooltip title="edit" placement="top">
                  <CreateIcon
                    onClick={() => setStyleSummary(!styleSummary)}
                    fontSize="small"
                    style={{ cursor: "pointer" }}
                  />
                </Tooltip>
              </Box>
              {!styleSummary ? (
                <>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                    varient="div"
                  >
                    <Typography
                      style={{ fontWeight: "bold" }}
                      variant="subtitle2"
                    >
                      Style ID:
                    </Typography>
                    <Typography variant="body2">snd23</Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    varient="div"
                  >
                    <Typography
                      style={{ fontWeight: "bold" }}
                      variant="subtitle2"
                    >
                      Brand Style Code:
                    </Typography>
                    <Typography variant="body2">{styleCode}</Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    varient="div"
                  >
                    <Typography
                      style={{ fontWeight: "bold" }}
                      variant="subtitle2"
                    >
                      unit Cost:
                    </Typography>
                    <Typography variant="body2">$234</Typography>
                  </Box>
                </>
              ) : (
                <>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                      {...register("quantity")}
                      label="Quantity"
                      placeholder="quantity"
                    />
                    <TextField
                      {...register("styleCode")}
                      label="StyleCode"
                      placeholder="styleCode"
                    />
                    <div style={{ marginTop: "20px", display: "flex" }}>
                      <Button
                        variant="contained"
                        onClick={() => setStyleSummary(!styleSummary)}
                        style={{
                          marginRight: "20px",
                        }}
                      >
                        cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        style={{ backgroundColor: "#388e3c" }}
                        color="primary"
                      >
                        save
                      </Button>
                    </div>
                  </form>
                </>
              )}

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
                varient="div"
              >
                <Typography style={{ fontWeight: "bold" }} variant="h6">
                  Quantity & variation
                </Typography>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#388e3c" }}
                  color="primary"
                >
                  View
                </Button>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                varient="div"
              >
                <Typography style={{ fontWeight: "bold" }} variant="subtitle2">
                  Quantity
                </Typography>
                <Typography variant="body2">{quantity}</Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                varient="div"
              >
                <Typography style={{ fontWeight: "bold" }} variant="subtitle2">
                  Variation
                </Typography>
                <Typography variant="body2">0</Typography>
              </Box>
            </div>
          </Grid>

          <Grid item xs={12} sm={8} md={9}>
            <div
              style={{
                backgroundColor: "#fff",
                boxShadow:
                  "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                padding: "10px",
                paddingBottom: "200px",
              }}
            >
              <Grid container style={{ textAlign: "center" }} spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box variant="div" style={{ marginBottom: "30px" }} m={2}>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        style={{ color: "black" }}
                      >
                        Metarials
                        <span
                          style={{
                            margin: "0 10px",
                            backgroundColor: " #80808082",
                            padding: "1px 5px",
                            borderRadius: "2px",
                          }}
                        >
                          {metarialCount}
                        </span>
                      </Typography>
                      <Link style={{ color: "black" }} to={"/addmetarial"}>
                        <Tooltip title="Add Material" placement="top">
                          <AddIcon
                            style={{
                              cursor: "pointer",
                            }}
                          />
                        </Tooltip>
                      </Link>
                    </div>
                    {metarial.map((ele) => {
                      return (
                        <Box
                          style={{
                            backgroundColor: "#fff",
                            marginBottom: "30px",
                            marginTop: "20px",
                            boxShadow:
                              "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                            padding: "10px",
                          }}
                        >
                          <Tooltip title="Delete" placement="top">
                            <DeleteIcon
                              onClick={() => handleMetarialsDelete(ele)}
                              style={{
                                cursor: "pointer",
                                display: "flex",
                                marginLeft: "auto",
                                marginTop: "10px",
                                marginRight: "10px",
                                marginBottom: "10px",
                                fontSize: "20px",
                                color: "grey",
                              }}
                            />
                          </Tooltip>
                          <img
                            src={ele.metarialImg}
                            style={{
                              height: "100px",
                              margin: "0px 5px",
                              alignItems: "center",
                              marginBottom: "20px",
                            }}
                            alt="dressImg"
                          />
                        </Box>
                      );
                    })}

                    <Link style={{ color: "black" }} to={"/addmetarial"}>
                      <Tooltip title="Add Metarials" placement="bottom">
                        <AddIcon
                          style={{
                            cursor: "pointer",
                            margin: "0 10px",
                            backgroundColor: " rgb(128 128 128 / 15%)",
                            padding: "1px 5px",
                            borderRadius: "2px",
                            marginTop: "20px",
                            fontSize: "50px",
                            textAlign: "left",
                            display: "flex",
                          }}
                        />
                      </Tooltip>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box variant="div" style={{ marginBottom: "30px" }} m={2}>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        style={{ color: "black" }}
                      >
                        Dimentions
                        <span
                          style={{
                            margin: "0 10px",
                            backgroundColor: " #80808082",
                            padding: "1px 5px",
                            borderRadius: "2px",
                          }}
                        >
                          0
                        </span>
                      </Typography>
                      <Link style={{ color: "black" }} to={"/addDimention"}>
                        <Tooltip title="Add Dimentions" placement="top">
                          <AddIcon
                            style={{
                              cursor: "pointer",
                            }}
                          />
                        </Tooltip>
                      </Link>
                    </div>

                    <Link style={{ color: "black" }} to={"/addDimention"}>
                      <Tooltip title="Add Dimentions" placement="bottom">
                        <AddIcon
                          style={{
                            cursor: "pointer",
                            margin: "0 10px",
                            backgroundColor: " rgb(128 128 128 / 15%)",
                            padding: "1px 5px",
                            borderRadius: "2px",
                            marginTop: "20px",
                            fontSize: "50px",
                            textAlign: "left",
                            display: "flex",
                          }}
                        />
                      </Tooltip>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box variant="div" style={{ marginBottom: "30px" }} m={2}>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        style={{ color: "black" }}
                      >
                        Components
                        <span
                          style={{
                            margin: "0 10px",
                            backgroundColor: " #80808082",
                            padding: "1px 5px",
                            borderRadius: "2px",
                          }}
                        >
                          {componentCount}
                        </span>
                      </Typography>
                      <Link style={{ color: "black" }} to={"/addcomponent"}>
                        <Tooltip title="Add Component" placement="top">
                          <AddIcon
                            style={{
                              cursor: "pointer",
                            }}
                          />
                        </Tooltip>
                      </Link>
                    </div>
                    {component.map((ele) => {
                      return (
                        <Box
                          style={{
                            backgroundColor: "#fff",
                            marginBottom: "30px",
                            marginTop: "20px",
                            boxShadow:
                              "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                            padding: "10px",
                          }}
                        >
                          <Tooltip title="Delete" placement="top">
                            <DeleteIcon
                              onClick={() => handleComponentDelete(ele)}
                              style={{
                                cursor: "pointer",
                                display: "flex",
                                marginLeft: "auto",
                                marginTop: "10px",
                                marginRight: "10px",
                                marginBottom: "10px",
                                fontSize: "20px",
                                color: "grey",
                              }}
                            />
                          </Tooltip>
                          <img
                            src={ele.componentImg}
                            style={{
                              height: "100px",
                              margin: "0px 5px",
                              alignItems: "center",
                              marginBottom: "20px",
                            }}
                            alt="dressImg"
                          />
                        </Box>
                      );
                    })}
                    <Link style={{ color: "black" }} to={"/addcomponent"}>
                      <Tooltip title="Add Component" placement="bottom">
                        <AddIcon
                          style={{
                            cursor: "pointer",
                            margin: "0 10px",
                            backgroundColor: " rgb(128 128 128 / 15%)",
                            padding: "1px 5px",
                            borderRadius: "2px",
                            marginTop: "20px",
                            fontSize: "50px",
                            textAlign: "left",
                            display: "flex",
                          }}
                        />
                      </Tooltip>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box variant="div" style={{ marginBottom: "30px" }} m={2}>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        style={{ color: "black" }}
                      >
                        Others
                        <span
                          style={{
                            margin: "0 10px",
                            backgroundColor: " #80808082",
                            padding: "1px 5px",
                            borderRadius: "2px",
                          }}
                        >
                          {otherCardCount}
                        </span>
                      </Typography>
                      <Link style={{ color: "black" }} to={"/addOtherCard"}>
                        <Tooltip title="Add Refarence images" placement="top">
                          <AddIcon
                            style={{
                              cursor: "pointer",
                            }}
                          />
                        </Tooltip>
                      </Link>
                    </div>
                    {otherCard.map((ele) => {
                      return (
                        <Box
                          style={{
                            backgroundColor: "#fff",
                            marginBottom: "30px",
                            marginTop: "20px",
                            boxShadow:
                              "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                            padding: "10px",
                          }}
                        >
                          <Tooltip title="Delete" placement="top">
                            <DeleteIcon
                              onClick={() => handleOtherCardDelete(ele)}
                              style={{
                                cursor: "pointer",
                                display: "flex",
                                marginLeft: "auto",
                                marginTop: "10px",
                                marginRight: "10px",
                                marginBottom: "10px",
                                fontSize: "20px",
                                color: "grey",
                              }}
                            />
                          </Tooltip>
                          <img
                            src={ele.otherCardImg}
                            style={{
                              height: "100px",
                              margin: "0px 5px",
                              alignItems: "center",
                              marginBottom: "20px",
                            }}
                            alt="dressImg"
                          />
                        </Box>
                      );
                    })}
                    <Link style={{ color: "black" }} to={"/addOtherCard"}>
                      <Tooltip title="Add Refarence images" placement="bottom">
                        <AddIcon
                          style={{
                            cursor: "pointer",
                            margin: "0 10px",
                            backgroundColor: " rgb(128 128 128 / 15%)",
                            padding: "1px 5px",
                            borderRadius: "2px",
                            marginTop: "20px",
                            fontSize: "50px",
                            textAlign: "left",
                            display: "flex",
                          }}
                        />
                      </Tooltip>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </div>
            <Grid
              style={{ marginTop: "200px", marginLeft: "auto" }}
              item
              xs={12} md={3}
            >
              <Button
                style={{ marginRight: "20px", backgroundColor: "#f50057d1" }}
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
              <Button
                onClick={handleSave}
                variant="contained"
                color="primary"
                size="large"
                style={{ backgroundColor: "#388e3c" }}
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TechPack;
