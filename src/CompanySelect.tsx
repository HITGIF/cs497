import React, { useEffect, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";

type Suggestion = {
  name: string;
  domain: string;
  logo: string;
}

const getSuggestions = (queryRaw: string) => {
  const query = queryRaw !== "" ? queryRaw : "a";
  return fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`)
    .then(response => response.json())
    .then(data => data as Suggestion[])
}

export function CompanySelect({value, onChange}: {
  value?: string;
  onChange: (text: string) => void;
}) {
  const [query, setQuery] = useState("a");
  const [companies, setCompanies] = useState<Suggestion[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getSuggestions(query);
      setCompanies(data ?? []);
    })();
  }, [query])
  return (
    <Autocomplete
      sx={{width: 300}}
      options={companies}
      autoHighlight
      freeSolo
      onInputChange={
        (e, value) => {
          setQuery(value);
          onChange(value);
        }
      }
      inputValue={value}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
          <img
            loading="lazy"
            width="20"
            src={option.logo}
            srcSet={option.logo}
            alt=""
          />
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          required
          label="Company"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
