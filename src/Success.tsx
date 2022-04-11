import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { Background } from "@app/Background";
import { ScrollToTop } from "@app/ScrollToTop";
import { Footer } from "@app/Footer";

export function Success() {
  return (
    <Stack>
      <ScrollToTop/>
      <Background color={"background.default"}>
        <Stack width={"100%"} height={"fit-content"} bgcolor={"primary.main"}>
          <Container maxWidth={"md"}>
            <Stack alignItems={"center"}>
              <Typography align={"center"} pt={30} mb={5} pb={6} variant={"h3"} fontWeight={800}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Stack>
          </Container>
        </Stack>
      </Background>
      <Footer/>
    </Stack>
  );
}
