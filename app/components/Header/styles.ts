import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

interface ButonProps {
  gotBorder?: boolean
}

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px 6px #80808061;
  color: black;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0 1em;
  justify-content: space-between;
  border-radius: 0 0 15px 15px;
`

export const HeaderTitle = styled.h3`
  color: #414978;
  cursor: pointer;
`

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`

// nav link lists
export const NavListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 2em;
  width: 15em;
`

export const NavList = styled.li`
  list-style-type: none;
  cursor: pointer;
`

export const NavLinks = styled(Link)`
  font-size: small;
  width: 5em;
  margin: 0 auto;
  text-align: center;
`

// Login and sign up buttons
export const NavButtonsWrapper = styled.div`
  display: flex;
  margin: 0em 1em;
`

export const NavButtons = styled.button<ButonProps>`
  ${({ gotBorder }) =>
    gotBorder
      ? `border: 2px solid #462BD1; background-color: #462BD1; color: white;`
      : `border: 2px solid #462BD1; background-color: transparent; color: #462BD1;`};
  width: 7em;
  padding: 1em 0.8em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 1em 0.5em;
  cursor: pointer;
  border-radius: 25em;
  p {
    font-size: small;
    width: 5em;
  }

  :hover {
    ${({ gotBorder }) =>
      gotBorder
        ? `border: 1px solid #462BD1; background-color: transparent; color: #462BD1;`
        : `border: 2px solid #462BD1;background-color: #462BD1; color: white;`}
  }
`

// search Bar
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: #f4f4f4;
  border-radius: 35em;
  height: 2em;
`

export const SearchBarContainer = styled.div`
  flex: 1;
`

export const SearchIcon = styled(Image)`
  display: inline-block;
  vertical-align: middle;
  width: 23px;
  height: 23px;
  padding: 0 3px;
`

export const SearchInput = styled.input`
  border: none;
  font-size: 10px;
  color: #484d82;
  outline: none;
  width: 25em;
  background-color: transparent;
  padding: 0 10px;
`

export const Divider = styled.div`
  border-left: 1px solid #e9e9e9;
  height: 1em;
`

export const DropdownButtonIcon = styled(Image)`
  display: inline-block;
  vertical-align: middle;
  width: 6px;
  height: 12px;
`

export const DropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10em;
  border: none;
  font-size: 10px;
  color: #484d82;
  background-color: transparent;
  padding: 1.5em;
  border-radius: 25px;
  cursor: pointer;
`

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 3.3em;
  left: 27em;
  width: 6em;
  z-index: 1;
  background-color: #ffffffbf;
  border: 2px solid #ccc;
  border-radius: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
`

export const DropdownMenuItem = styled.li`
  padding: 0.5em;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`
