import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { Background } from "@app/Background";
import { ScrollToTop } from "@app/ScrollToTop";
import { Footer } from "@app/Footer";
import { ButtonLink } from "@app/ButtonLink";

export function Success() {
  return (
    <Stack>
      <ScrollToTop/>
      <Background>
          <Container maxWidth={"md"}>
            <Stack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
              <Typography align={"center"} pt={4}  pb={4} variant={"h3"} fontWeight={800}>
                Successfully Submitted!
              </Typography>
              <ButtonLink to={"/"}>
                Back to home
              </ButtonLink>
            </Stack>
          </Container>
      </Background>
      <Footer/>
    </Stack>
  );
}
