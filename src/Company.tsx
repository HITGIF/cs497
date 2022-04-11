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
  Tooltip,
  Typography
} from "@mui/material";
import { ScrollToTop } from "@app/ScrollToTop";
import { Background } from "@app/Background";
import { Footer } from "@app/Footer";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { normalize } from "@app/helpers";
import { Stage } from "@app/proto/api";
import { difference, max, sum, union } from "lodash";
import styled from "styled-components";
import { cleanScrollBarWithWhiteBorder } from "@app/styles";
import { CHARACTERISTICS, companyLogo, CompanyStatsResponse, getCompanyStatsByName } from "@app/CompanyApi";

const Stages = Object
  .keys(Stage)
  .filter(value => isNaN(Number(value)))
  // .slice(1)
  .slice(0, -1);

export function Company() {
  const [searchParams] = useSearchParams();
  const companyName = searchParams.get("name") as string;
  const [company, setCompany] = useState<CompanyStatsResponse>();
  const [charsToShow, setCharsToShow] = useState(CHARACTERISTICS);

  useEffect(() => {
    (async () => {
      const data = await getCompanyStatsByName(companyName);
      setCompany(data);
    })();
  }, [companyName]);

  const stages = Stages.map((stage) => (
    <Stack spacing={3}>
      <Typography variant={"h5"} pl={0}>{normalize(stage)}</Typography>
      <StyledStack pb={2} spacing={3} direction={"row"} sx={{overflowX: "auto"}}>
        {charsToShow.map((char, index) => {
          const charData = company?.stages[stage][char];
          if (!charData) return null;
          const data = Object.keys(charData).map(key => ({
            name: key,
            value: charData[key]
          })) ?? [];
          const maxValue = max(data.map(it => it.value))!;
          const total = sum(data.map(it => it.value))!;
          return (
            <Stack direction={"row"} spacing={1}>
              <Stack pt={4.5} spacing={2}>
                <Stack spacing={2}>
                  {data.map(it => (
                    <Typography
                      minWidth={48}
                      variant={"caption"}
                      whiteSpace={"nowrap"}
                      align={"right"}
                    >{
                      it.name.startsWith("OTHER")
                        ? "Other"
                        : normalize(it.name)
                    }</Typography>
                  ))}
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <Typography fontWeight={700}>{normalize(char)}</Typography>
                <Stack spacing={2}>
                  {data.map(it => (
                    <Tooltip title={`${Math.round(it.value / total * 100 * 100) / 100}%`}>
                      <Box
                        width={it.value / maxValue * 180}
                        height={21}
                        bgcolor={"primary.main"}
                        sx={{
                          transition: "background-color 0.2s ease",
                          ":hover": {
                            backgroundColor: "#09314B",
                          }
                        }}
                      />
                    </Tooltip>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          );
        })}
      </StyledStack>
    </Stack>
  ));

  return (
    <Stack>
      <ScrollToTop/>
      <Background color={"background.default"}>
        <Stack width={"100%"} height={"fit-content"} bgcolor={"primary.main"}>
          <Container>
            <Stack direction={"row"} spacing={4}>
              <Avatar
                alt={companyName}
                src={company ? companyLogo(company.domain) : ""}
                sx={{width: 90, height: 90, mt: 18, mb: 3, objectFit: "contain"}}
              />
              <Typography pt={20} pb={6} variant={"h3"} fontWeight={800}>
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
                    {CHARACTERISTICS.map(char => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={charsToShow.includes(char)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setCharsToShow(union(charsToShow, [char]));
                              } else {
                                setCharsToShow(difference(charsToShow, [char]));
                              }
                            }}
                          />
                        }
                        label={normalize(char)}
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
              <Stack pt={4} pb={4} spacing={10}>
                {stages}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Background>
      <Footer/>
    </Stack>
  );
}


const StyledStack = styled(Stack)`
  ${cleanScrollBarWithWhiteBorder};
`;