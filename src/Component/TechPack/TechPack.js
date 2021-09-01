import {
  Avatar,
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  makeStyles,
  Select,
  TextField,
  Tooltip,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import { useForm } from "react-hook-form";
import { blue } from "@material-ui/core/colors";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CreateIcon from "@material-ui/icons/Create";
import React, { useState } from "react";
import "./TechPack.css";
import dress from "../../photos/dress.jpg";
import DeleteIcon from "@material-ui/icons/Delete";

import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

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
}));

const TechPack = () => {
  const [variation, setVariation] = React.useState("");

  const handleChange = (event) => {
    setVariation(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleBox(data);
  };

  const [name, setName] = useState("JumpSuit");
  const [box, setBox] = useState(false);

  const handleBox = (e) => {
    setName(e.name);
    setBox(!box);
  };
  const classes = useStyles();
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

        {!box ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Tooltip title="Add" placement="top">
              <CreateIcon
                onClick={() => setBox(!box)}
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
              />
            </Tooltip>

            <h2>{name}</h2>

            <Avatar
              style={{ width: "20px", height: "20px", marginLeft: "5px" }}
              className={classes.blue}
            >
              <span style={{ color: "white" }}>i</span>
            </Avatar>
          </div>
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
                defaultValue="JumpSuit"
                variant="outlined"
              />
            </form>
          </div>
        )}
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
              onChange={handleChange}
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
            <div
              style={{
                backgroundColor: "#fff",

                boxShadow:
                  "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                padding: "10px",
              }}
            >
              <Tooltip title="Delete" placement="top">
                <DeleteIcon
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    marginLeft: "auto",
                    marginTop: "20px",
                    marginRight: "22px",
                    fontSize: "30px",
                    color: "grey",
                  }}
                />
              </Tooltip>
              <img
                src={dress}
                style={{ width: "100%", height: "300px" }}
                alt="dressImg"
              />
            </div>
            <div style={{marginTop: "50px"}}>
              <div style={{ display: "flex"}}>
                <img
                  src={dress}
                  style={{  height: "50px",alignItems: "center"}}
                  alt="dressImg"
                />
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
                  <CreateIcon fontSize="small" style={{ cursor: "pointer" }} />
                </Tooltip>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                }}
                varient="div"
              >
                <Typography style={{ fontWeight: "bold" }} variant="subtitle2">
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
                <Typography style={{ fontWeight: "bold" }} variant="subtitle2">
                  Brand Style Code:
                </Typography>
                <Typography variant="body2">ss-snd23</Typography>
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
                  unit Cost:
                </Typography>
                <Typography variant="body2">$234</Typography>
              </Box>
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
                <Button variant="contained" color="primary">
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
                <Typography variant="body2">6</Typography>
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
                          0
                        </span>
                      </Typography>
                      <Tooltip title="Add" placement="top">
                        <AddIcon
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>
                    </div>
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
                      <Tooltip title="Add" placement="top">
                        <AddIcon
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>
                    </div>
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
                          0
                        </span>
                      </Typography>
                      <Tooltip title="Add" placement="top">
                        <AddIcon
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>
                    </div>
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
                          0
                        </span>
                      </Typography>
                      <Tooltip title="Add" placement="top">
                        <AddIcon
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>
                    </div>
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
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TechPack;
