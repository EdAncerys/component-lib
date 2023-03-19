export interface NavListProps {
  slug: string;
  title: string;
}

export interface HeaderInterface {
  height?: string;
  color?: string;
  navList: NavListProps[];
  backgroundColor?: string;
  className?: string;
  children?: string;
  setSearchResult: (searchData: SearchResult) => void;
}

export interface SearchResult {
  searchValue: string;
  optionValue: string | null;
}

export interface SearchBarProps {
  setSearchResult: (searchData: SearchResult) => void;
}
