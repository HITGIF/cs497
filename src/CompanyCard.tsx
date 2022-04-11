import * as React from "react";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import { ArrowForward } from "@mui/icons-material";
import { Avatar, Box, CardActions, CardHeader } from "@mui/material";
import { LinkWrapper } from "@app/ButtonLink";
import { companyLogo } from "@app/CompanyApi";
import { Company } from "@app/proto/api";

export default function CompanyCard({company}: { company: Company }) {
  return (
    <Card sx={{maxWidth: 500}}>
      <CardHeader
        avatar={<Avatar src={companyLogo(company.domain)}/>}
        title={company.name}
      />
      <CardActions disableSpacing>
        <Box sx={{marginLeft: "auto"}}>
          <LinkWrapper to={`/company/?name=${company.name}`}>
            <IconButton aria-label="detail">
              <ArrowForward/>
            </IconButton>
          </LinkWrapper>
        </Box>
      </CardActions>
    </Card>
  );
}