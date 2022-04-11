import {
  Avatar,
  Box,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import { ScrollToTop } from "@app/ScrollToTop";
import { Background } from "@app/Background";
import { Footer } from "@app/Footer";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { keys } from "@app/helpers";
import { Stage } from "@app/proto/api";
import { difference, max, union } from "lodash";
import styled from "styled-components";
import { cleanScrollBar } from "@app/styles";

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

const Stages = keys(Stage);

const Characteristics = [
  "Gender",
  "Ethnicity",
  "Ethnicity1",
  "Ethnicity2",
  "Ethnicity3",
  "Ethnicity4",
  "Ethnicity5",
  "Ethnicity6",
  "Ethnicity7",
  "Ethnicity8",
]

export function Company() {
  const [searchParams] = useSearchParams();
  const companyDomain = searchParams.get("domain");
  const companyName = searchParams.get("name");
  const [company, setCompany] = useState<Suggestion>({});
  const [charsToShow, setCharsToShow] = useState(Characteristics);

  useEffect(() => {
    (async () => {
      if (companyDomain) {
        const data = await getCompany(companyDomain);
        setCompany(data[0]);
      }
    })()
  }, [companyDomain])

  const stages = Stages.map((stage, index) => (
    <Stack spacing={2}>
      <Typography variant={"h6"}>{stage}</Typography>
      <StyledStack pb={2} spacing={8} direction={"row"} sx={{overflowX: "auto"}}>
        {charsToShow.map(char => {
          const data = [
            {name: "awqe", value: 12},
            {name: "b", value: 20},
            {name: "cw", value: 11},
          ]
          const maxValue = max(data.map(it => it.value))!;
          return (
            <Stack direction={"row"} spacing={1}>
              <Stack pt={4.5} spacing={2}>
                <Stack spacing={2}>
                  {data.map(it => (
                    <Typography align={"right"}>{it.name}</Typography>
                  ))}
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <Typography>{char}</Typography>
                <Stack spacing={2}>
                  {data.map(it => (
                    <Box
                      width={it.value / maxValue * 180}
                      height={21}
                      bgcolor={"primary.main"}
                    />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          )
        })}
      </StyledStack>
    </Stack>
  ))

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
        <Container maxWidth={"xl"}>
          <Grid container columnSpacing={4}>
            <Grid item sm={3} md={3} lg={2} sx={{display: {xs: "none", sm: "unset"}}}>
              <Stack position={"sticky"} top={24} direction={"row"} width={"100%"} mt={4}>
                <Stack spacing={2}>
                  <Typography variant={"h5"}>
                    Variable
                  </Typography>
                  <FormGroup>
                    {Characteristics.map(char => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={charsToShow.includes(char)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setCharsToShow(union(charsToShow, [char]))
                              } else {
                                setCharsToShow(difference(charsToShow, [char]))
                              }
                            }}
                          />
                        }
                        label={char}
                      />
                    ))}
                  </FormGroup>
                </Stack>
                <Divider orientation="vertical" flexItem sx={{
                  ml: "auto",
                  display: {xs: "none", sm: "unset"}
                }}/>
              </Stack>
            </Grid>
            <Grid item sm={9} md={9} lg={10} sx={{maxHeight: "100%", overflowY: "auto"}}>
              <Stack pl={3} pt={4} pb={4} spacing={10}>
                {stages}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Background>
      <Footer/>
    </Stack>
  )
}


const StyledStack = styled(Stack)`
  ${cleanScrollBar};
`;