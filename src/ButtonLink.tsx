import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const ButtonLink = ({to, children}: {
  to: string,
  children?: React.ReactNode
}) => (
  <LinkWrapper to={to}>
    <Button color="inherit">
      {children}
    </Button>
  </LinkWrapper>
)

export const LinkWrapper = ({to, children}: {
  to: string,
  children?: React.ReactNode
}) => (
  <Link to={to} style={{textDecoration: 'inherit', color: 'inherit'}}>
    {children}
  </Link>
)