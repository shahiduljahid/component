import React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

const Lists = ({ title, list }) => {
  const { listTitle, listValue1, listValue2,listValue3,listValue4,listValue5,listValue6 } = list;
  console.log(list);
  return (
    <div>
      <List dense={true}>
        <ListItem>
          <Grid style={{ padding: "0" }} container spacing={4}>
            <Grid style={{ padding: "0" }} item xs={6}>
              <Typography
                style={{ color: "black", fontWeight: "700" }}
                variant="p"
                gutterBottom
              >
                {listTitle}
              </Typography>
            </Grid>

            <Grid style={{ padding: "0" }} item xs={6}>
             
              {listValue2 ? (
                <Box>
                  <Grid container spacing={2} >
                    <Grid item sm={6}>
                      <ListItemText
                        style={{ color: "#36404E" }}
                        primary={listValue1}
                      />
                       <ListItemText
                        style={{ color: "#36404E" }}
                        primary={listValue3}
                      />
                       <ListItemText
                        style={{ color: "#36404E" }}
                        primary={listValue5}
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <ListItemText
                        style={{ color: "#36404E" }}
                        primary={listValue2}
                      />
                      <ListItemText
                        style={{ color: "#36404E" }}
                        primary={listValue4}
                      />
                       <ListItemText
                        style={{ color: "#36404E" }}
                        primary={listValue6}
                      />
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <ListItemText style={{ color: "#36404E" }} primary={listValue1} />
              )}
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </div>
  );
};

export default Lists;
