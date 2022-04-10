import { Avatar, Container, Stack, Typography } from "@mui/material";
import { ScrollToTop } from "@app/ScrollToTop";
import { Background } from "@app/Background";
import { Footer } from "@app/Footer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Suggestion = {
  name?: string;
  domain?: string;
  logo?: string;
}

const getSuggestions = (queryRaw: string) => {
  const query = queryRaw !== "" ? queryRaw : "a";
  return fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`)
    .then(response => response.json())
    .then(data => data as Suggestion[])
}

export function Company() {
  const {companyPath} = useParams();
  const [company, setCompany] = useState<Suggestion>({});
  useEffect(() => {
    (async () => {
      const data = await getSuggestions(companyPath!);
      setCompany(data[0]);
    })()
  }, [companyPath])

  return (
    <Stack>
      <ScrollToTop/>
      <Background color={"background.default"}>
        <Stack width={"100%"} height={"fit-content"} bgcolor={"primary.main"}>
          <Container>
            <Stack direction={"row"}>
              <Avatar
                alt={company.name}
                src={company.logo}
                sx={{width: 152, height: 152}}
              />
              <Typography pt={16} pb={6} variant={"h3"} fontWeight={800}>
                {company.name}
              </Typography>
            </Stack>
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