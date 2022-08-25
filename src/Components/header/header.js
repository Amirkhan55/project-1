import { HomeRounded, Person } from "@material-ui/icons";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import DrawerComp from "../Drawer/DrawerComp";
const PAGES = ["products", "Services", "Abouts", "Contacts", "Reviews"];

export default function Header() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <React.Fragment>
        <AppBar sx={{ background: "#063970" }}>
          <Toolbar>
            <HomeRounded />
            {isMatch ? (
              <>
                <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                  Shopee
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  indicatorColor="secondary"
                >
                  {PAGES.map((page, index) => (
                    <Tab key={index} label={page} />
                  ))}
                  {/* <Tab label="Products" />
                  <Tab label="Serivces" />
                  <Tab label="Contact us" />
                  <Tab label="About" />
                  <Tab label="Review" /> */}
                </Tabs>
                <Button sx={{ marginLeft: "auto" }} variant="contained">
                  Logout
                </Button>
                <Button sx={{ marginLeft: "10px" }} variant="contained">
                  SignUp
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
}
