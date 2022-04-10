import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline, Stack, Typography } from "@mui/material";
import { Background } from "@app/Background";
import { Submission } from "@app/Submission";
import { ScrollToTop } from "@app/ScrollToTop";
import { MUITheme } from "@app/theme";
import { Footer } from "@app/Footer";

function Home() {
  return (
    <Stack>
      <ScrollToTop/>
      <Background color={"background.default"}>
        <Stack width={"100%"} height={"fit-content"} bgcolor={"primary.main"}>
          <Container>
            <Typography pt={16} pb={6} variant={"h3"} fontWeight={800}>
              aaa
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
  )
}

function Company() {
  return (
    <Stack>
      <ScrollToTop/>
      <Background color={"background.default"}>
        <Stack width={"100%"} height={"fit-content"} bgcolor={"primary.main"}>
          <Container>
            <Typography pt={16} pb={6} variant={"h3"} fontWeight={800}>
              Google
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
  )
}

export function App() {
  return (
    <ThemeProvider theme={MUITheme}>
      <BrowserRouter>
        <CssBaseline enableColorScheme/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/submit" element={<Submission/>}/>
          <Route path="/company" element={<Company/>}>
            <Route path=":companyId" element={<Company/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
