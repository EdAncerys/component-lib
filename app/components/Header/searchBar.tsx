import React, { useState } from "react";
import {
  Divider,
  DropdownButton,
  DropdownButtonIcon,
  DropdownMenu,
  DropdownMenuItem,
  SearchBarContainer,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "./styles";
import searchIcon from "../../assets/icons/search.svg";
import dropdown from "../../assets/icons/dropdown.svg";
import { SearchBarProps } from "./headerInterface";

const SearchBar = ({
  setSearchResult,
  options,
  inputValue,
  setInputValue,
  dropdownOpen,
  selectedCategory,
  handleDropdownClick,
  handleOptionClick,
  handleKeyPress,
}: SearchBarProps) => {
  return (
    <SearchWrapper>
      <SearchBarContainer>
        <SearchIcon src={searchIcon} alt="search" />
        <SearchInput
          type="text"
          placeholder="Search product"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </SearchBarContainer>

      <Divider></Divider>
      <DropdownButton onClick={handleDropdownClick}>
        {selectedCategory || "Category"}

        <DropdownButtonIcon src={dropdown} alt="options" />
      </DropdownButton>
      {dropdownOpen && (
        <DropdownMenu>
          {options.map((option: any) => (
            <DropdownMenuItem
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
    </SearchWrapper>
  );
};

export default SearchBar;
