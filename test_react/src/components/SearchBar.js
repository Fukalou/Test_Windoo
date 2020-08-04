import React from "react";
import SearchBarAutocomplete from "./SearchBarAutocomplete";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <SearchBarAutocomplete ideas={props.ideas} />
      {/* <Filters /> */}
    </div>
  );
}

export default SearchBar;
