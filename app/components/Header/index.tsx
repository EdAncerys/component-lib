import React from "react";
import { HeaderInterface, NavListProps } from "./headerInterface";
import SearchBar from "./searchBar";
import {
  HeaderTitle,
  HeaderWrapper,
  NavBar,
  NavButtons,
  NavButtonsWrapper,
  NavLinks,
  NavList,
  NavListWrapper,
} from "./styles";

const Header = ({
  setSearchResult,
  navList,
  children = "Brand Name",
}: // ...props
HeaderInterface) => {
  const handleLogin = () => {
    console.log("To Login/Signup");
  };

  return (
    <HeaderWrapper>
      <HeaderTitle>{children}</HeaderTitle>
      <SearchBar setSearchResult={setSearchResult} />

      <NavBar>
        <NavListWrapper>
          {navList.map((item: NavListProps, index: number) => (
            <>
              <NavList key={index}>
                <NavLinks href={item.slug}>{item.title}</NavLinks>
              </NavList>
            </>
          ))}
        </NavListWrapper>

        <NavButtonsWrapper>
          <NavButtons gotBorder onClick={() => handleLogin()}>
            Login
          </NavButtons>
          <NavButtons onClick={() => handleLogin()}>Sign Up</NavButtons>
        </NavButtonsWrapper>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
