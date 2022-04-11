import { Stack, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Stack alignItems={"center"} spacing={2} p={6} sx={{bgcolor: "primary.contrastText"}}>
      <Typography variant={"caption"} color={"white"} align={"center"}>
        This is a CS 497 project aimed to create a platform
        for anonymously sharing job applications outcome.
        <br/>
        Currently the website is populated with randomly generated data for demonstration purpose only.
        <br/>
        Functionalities are complete but for security and legal reasons please do not submit
        real data yet.
      </Typography>
    </Stack>
  );
};
