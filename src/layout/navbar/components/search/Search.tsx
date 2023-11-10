import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { get } from "lodash";

import { CloseCircle, Search as SearchIcon } from "assets/icons";

import { StyledSearchInput } from "./Search.style";

const Search = () => {
  const [value, setValue] = useState<string>("");

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(get(event, "target.value", ""));
  };

  return (
    <StyledSearchInput
      isValue={!!value}
      onChange={handleChangeInput}
      value={value}
      InputProps={{
        startAdornment: <SearchIcon />,
        endAdornment: value && (
          <IconButton onClick={() => setValue("")}>
            <CloseCircle />
          </IconButton>
        ),
      }}
      placeholder="Search for any training you want "
    />
  );
};

export default Search;
