import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { ArrowForward, FavoriteOutlined, Share } from "@mui/icons-material";
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
      <CardContent>
        {/*<Typography variant="body2" color="text.secondary">*/}
        {/*</Typography>*/}
      </CardContent>
      <CardActions disableSpacing>
        {/*<IconButton aria-label="add to favorites">*/}
        {/*  <FavoriteOutlined/>*/}
        {/*</IconButton>*/}
        {/*<IconButton aria-label="share">*/}
        {/*  <Share/>*/}
        {/*</IconButton>*/}
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