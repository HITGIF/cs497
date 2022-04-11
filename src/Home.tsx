import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Grid, IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";
import { Background } from "@app/Background";
import { ScrollToTop } from "@app/ScrollToTop";
import { Footer } from "@app/Footer";
import { Add, Search } from "@mui/icons-material";
import CompanyCard from "@app/CompanyCard";
import { Company } from "@app/proto/api";
import { LinkWrapper } from "@app/ButtonLink";
import { URL_BASE } from "@app/api";

const getCompanies = async () => {
  const req = await fetch(`${URL_BASE}/company/`);
  return (await req.json()) as Company[];
};

export function Home() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [companiesToShow, setCompaniesToShow] = useState(companies);
  const [filter, setFilter] = useState<string>();
  const updateCompaniesToShow = (companies: Company[], filter: string | undefined) => {
    if (!filter) {
      setCompaniesToShow(companies);
      return;
    }
    setCompaniesToShow(companies.filter(it =>
      it.name.toLocaleLowerCase().includes(filter)
    ));
  };
  useEffect(() => {
    getCompanies()
      .then((companies) => {
        setCompanies(companies);
        updateCompaniesToShow(companies, filter);
      });
  }, []);

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
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  marginBottom: -3,
                  display: "flex",
                  alignItems: "center",
                  width: {
                    md: "60%",
                    sm: "70%",
                    xs: "90%",
                  },
                }}
              >
                <InputBase
                  sx={{ml: 1, flex: 1}}
                  placeholder="Search Company"
                  inputProps={{"aria-label": "search google maps"}}
                  onChange={(e) => {
                    setFilter(e.target.value);
                    updateCompaniesToShow(companies, e.target.value);
                  }}
                />
                <IconButton disabled sx={{p: "10px"}} aria-label="search">
                  <Search/>
                </IconButton>
                <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                <LinkWrapper to={"/submit"}>
                  <Button variant={"text"} color={"secondary"} endIcon={<Add/>}>
                    Share Yours
                  </Button>
                </LinkWrapper>
              </Paper>
            </Stack>
          </Container>
        </Stack>
        <Container>
          <Stack pt={4} pb={4} spacing={2}>
            <Grid container pt={12} spacing={4} sx={{justifyContent: {xs: "center", md: "inherit"}}}>
              {Object.values(companiesToShow).map(company => (
                <Grid item xs={12} sm={6} md={4} key={company.name}>
                  <CompanyCard company={company}/>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Background>
      <Footer/>
    </Stack>
  );
}
