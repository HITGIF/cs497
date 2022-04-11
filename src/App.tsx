import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Submission } from "@app/Submission";
import { MUITheme } from "@app/theme";
import { Company } from "@app/Company";
import { Home } from "@app/Home";
import { Success } from "@app/Success";

export function App() {
  return (
    <ThemeProvider theme={MUITheme}>
      <HashRouter>
        <CssBaseline enableColorScheme/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/submit" element={<Submission/>}/>
          <Route path="/submit-success" element={<Success/>}/>
          <Route path="/company" element={<Company/>}/>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
