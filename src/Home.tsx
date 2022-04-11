import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { Background } from "@app/Background";
import { ScrollToTop } from "@app/ScrollToTop";
import { Footer } from "@app/Footer";

export function Home() {
  return (
    <Stack>
      <ScrollToTop/>
      <Background color={"background.default"}>
        <Stack width={"100%"} height={"fit-content"} bgcolor={"primary.main"}>
          <Container>
            <Typography pt={20} pb={6} variant={"h3"} fontWeight={800}>
              Something
            </Typography>
          </Container>
        </Stack>
        <Container>
          <Stack pt={4} pb={4} spacing={2}>

          </Stack>
        </Container>
      </Background>
      <Footer/>
    </Stack>
  );
}
