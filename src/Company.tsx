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
import { capitalize, keys } from "@app/helpers";
import { CompanyStatsRequest, Stage } from "@app/proto/api";
import { difference, max, union } from "lodash";
import post from "@app/post";
import { URL_BASE } from "@app/api";
import { buildProto } from "@app/buildProto";
import styled from "styled-components";
import { cleanScrollBar } from "@app/styles";

type CompanyStatsResponse = {
  domain: string
  stages: Map<string, Map<string, Map<any, number>>>
}


const getCompanyStatsByName = async (name: string) => {
  return (await post<CompanyStatsRequest, CompanyStatsResponse>(
    `${URL_BASE}/company/${name}`,
    buildProto<CompanyStatsRequest>({
      interestedAttributes: Characteristics,
      jobTitleFilter: '',
    }),
    CompanyStatsRequest,
    undefined,
  ))
}

const Stages = keys(Stage);

const Characteristics = [
  "gender",
  "sexual_orientation",
  "racial_origin",
  "visa_status",
  "nationality",
  "disability",
  "veteran_status",
  "criminal_background",
  "indigenous",
  "marriage_status",
]

export function Company() {
  const [searchParams] = useSearchParams();
  const companyName = searchParams.get("name") as string;
  const [company, setCompany] = useState<CompanyStatsResponse>();
  const [charsToShow, setCharsToShow] = useState(Characteristics);

  useEffect(() => {
    (async () => {
      const data = await getCompanyStatsByName(companyName);
      setCompany(data);
    })()
  }, [companyName])

  const stages = Stages.map((stage, index) => (
    <Stack spacing={2}>
      <Typography variant={"h6"}>{stage}</Typography>
      <StyledStack pb={2} spacing={8} direction={"row"} sx={{overflowX: "auto"}}>
        {charsToShow.map(char => {
          const char_display = char.split("_").map(capitalize).join(" ");
          const charData = company?.stages?.get(stage)?.get(char)
          if (!charData) return (<span/>)
          const data = Array.from(charData!!)?.map(it => ({name: it[0], value: it[1]})) ?? []
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
                <Typography>{char_display}</Typography>
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
                alt={companyName}
                src={`https://logo.clearbit.com/${company?.domain}`}
                sx={{width: 90, height: 90, mt: 14, mb: 3}}
              />
              <Typography pt={16} pb={6} variant={"h3"} fontWeight={800}>
                {companyName}
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
                        label={char.split("_").map(capitalize).join(" ")}
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