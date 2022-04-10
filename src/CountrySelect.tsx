import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Nationalities } from "@app/nationalities";

export function CountrySelect({value, onChange}: {
  value?: string;
  onChange: (text: string) => void;
}) {
  return (
    <Autocomplete
      sx={{width: 300}}
      options={Nationalities}
      autoHighlight
      onInputChange={
        (e, value) => {
          onChange(value);
        }
      }
      value={value}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
          {...params}
          required
          label="Nationality"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
