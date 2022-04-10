import { Avatar, Container, Stack, Typography } from "@mui/material";
import { ScrollToTop } from "@app/ScrollToTop";
import { Background } from "@app/Background";
import { Footer } from "@app/Footer";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Suggestion = {
  name?: string;
  domain?: string;
  logo?: string;
}

const getCompany = (domain: string) => {
  return fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${domain}`)
    .then(response => response.json())
    .then(data => data as Suggestion[])
}

export function Company() {
  const [searchParams] = useSearchParams();
  const companyDomain = searchParams.get("domain");
  const companyName = searchParams.get("name");
  const [company, setCompany] = useState<Suggestion>({});

  useEffect(() => {
    (async () => {
      if (companyDomain) {
        const data = await getCompany(companyDomain);
        setCompany(data[0]);
      }
    })()
  }, [companyDomain])

  return (
    <Stack>
      <ScrollToTop/>
      <Background color={"background.default"}>
        <Stack width={"100%"} height={"fit-content"} bgcolor={"primary.main"}>
          <Container>
            <Stack direction={"row"} spacing={4}>
              <Avatar
                alt={company.name}
                src={company.logo}
                sx={{width: 90, height: 90, mt: 14, mb: 3}}
              />
              <Typography pt={16} pb={6} variant={"h3"} fontWeight={800}>
                {company.name ?? companyName}
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