export interface NavListProps {
  slug: string
  title: string
}

export interface HeaderInterface {
  height?: string
  color?: string
  navList: NavListProps[]
  backgroundColor?: string
  children: string
  options: string[]
  inputValue: string
  setInputValue: (value: string) => void
  dropdownOpen: boolean
  selectedCategory: string | null
  setSearchResult: (searchData: SearchResult) => void
  handleOptionClick: (option: string) => void
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
  handleDropdownClick: () => void
}

export interface SearchResult {
  searchValue: string
  optionValue: string | null
}

export interface SearchBarProps {
  options: string[]
  inputValue: string
  setInputValue: (value: string) => void
  dropdownOpen: boolean
  selectedCategory: string | null
  handleDropdownClick: () => void
  setSearchResult: (searchData: SearchResult) => void
  handleOptionClick: (option: string) => void
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}
