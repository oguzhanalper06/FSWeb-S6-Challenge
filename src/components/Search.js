import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

function Search(props) {
  const { search, setSearch } = props;
  const ScInput = styled.input`
    padding: 5px;
    width: 32%;
    background-color: lightcyan;
    color: white;
    border-style: groove;
  `;
  return (
    <ScInput
      type="text"
      placeholder="Search"
      onChange={(event) => setSearch(event.target.value)}
      value={search}
    ></ScInput>
  );
}

export default Search;
