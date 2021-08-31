import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { createTheme } from "@material-ui/core/styles";
import FilterListIcon from "@material-ui/icons/FilterList";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import BusinessIcon from "@material-ui/icons/Business";
import AppsIcon from "@material-ui/icons/Apps";
import "./Suplier.css";
import { grey } from "@material-ui/core/colors";
import SupplierCard from "./SupplierCard/SupplierCard";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import SupplierFullDetails from "../SupplierFullDetails/SupplierFullDetails";

const theme = createTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  palette: {
    primary: {
      main: grey[400],
    },
    secondary: {
      main: "#f44336",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper: {
    marginRight: theme.spacing(2),
  },

  link: {
    display: "flex",
    color: theme.palette.secondary,
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const Suplier = ({ suplier }) => {
  const classes = useStyles();
  const [fullDetails, setFullDetails] = useState({});
 
  const handleFullDetails = (element) => {
    setFullDetails(element);
  };
  const closeFullDetails = () => {
    setFullDetails({});
  };
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      {fullDetails.title ? (
        <SupplierFullDetails closeFullDetails={closeFullDetails} fullDetails={fullDetails}></SupplierFullDetails>
      ) : (
        <>
          <Box>
            <Grid
              spacing={1}
              style={{ flexGrow: "1" }}
              container
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item style={{ marginLeft: "20px" }} xs={12} md={2} sm={12}>
                <form
                  style={{ marginBottom: "16px", paddingBottom: "15px" }}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="Search"
                    color="primary"
                  />
                </form>
              </Grid>
              <Grid style={{ marginLeft: "20px" }} item xs={12} md={3} sm={12}>
                <Breadcrumbs aria-label="breadcrumb">
                  <div color="inherit" href="/" className={classes.link}>
                    <div>
                      <Button
                        ref={anchorRef}
                        aria-controls={open ? "menu-list-grow" : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                      >
                        <FilterListIcon
                          className={classes.icon}
                        ></FilterListIcon>
                        Filter
                      </Button>
                      <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === "bottom"
                                  ? "center top"
                                  : "center bottom",
                            }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                  autoFocusItem={open}
                                  id="menu-list-grow"
                                  onKeyDown={handleListKeyDown}
                                >
                                  <MenuItem onClick={handleClose}>
                                    Bangladesh
                                  </MenuItem>
                                  <MenuItem onClick={handleClose}>
                                    China
                                  </MenuItem>
                                  <MenuItem onClick={handleClose}>
                                    India
                                  </MenuItem>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </div>
                  </div>
                  <div color="inherit" className={classes.link}>
                    <BusinessIcon className={classes.icon} />
                    Factories
                  </div>
                  <div color="inherit" className={classes.link}>
                    <AppsIcon className={classes.icon} />
                    Grid view
                  </div>
                </Breadcrumbs>
              </Grid>
            </Grid>
          </Box>

          <Box p={2} style={{ flexGrow: "1" }}>
            <Grid container spacing={3}>
              {suplier.map((element) => (
                <SupplierCard
                fullDetails={fullDetails}
                  handleFullDetails={handleFullDetails}
                 
                  element={element}
                ></SupplierCard>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default Suplier;
