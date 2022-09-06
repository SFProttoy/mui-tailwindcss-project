import { Box, Grid, MenuItem } from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "../public/Group 37.png";
const Navbar = () => {
  return (
    <header className="mt-10">
      <nav>
        <Grid container spacing={7}>
          <Grid item xs={2}>
            <Image src={Logo} alt="logo" width="178px" height="56px" />
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <MenuItem className="text-sm p-0 hover:bg-white">Flight</MenuItem>
              <MenuItem className="text-sm text-sky-500 hover:bg-white">
                Bus
              </MenuItem>
              <MenuItem className="text-sm p-0 hover:bg-white">Hotel</MenuItem>
              <MenuItem className="text-sm hover:bg-white">Holiday</MenuItem>
              <MenuItem className="text-sm p-0 hover:bg-white">Visa</MenuItem>
              <MenuItem className="text-sm hover:bg-white">Visa Guide</MenuItem>
              <MenuItem className="text-sm p-0 hover:bg-white">
                Group Request
              </MenuItem>
              <MenuItem className="text-sm hover:bg-white">
                Travel Advisory
              </MenuItem>
              <MenuItem className="text-sm p-0 hover:bg-white">
                Promotions
              </MenuItem>
              <MenuItem className="text-sm hover:bg-white">Blog</MenuItem>
            </Box>
          </Grid>
        </Grid>
      </nav>
    </header>
  );
};

export default Navbar;
