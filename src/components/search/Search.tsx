import React from "react";
import { Input } from "@chakra-ui/react";

interface SearchNftNameProps {
  onChangeKeyword: (name: string) => void;
  keyword: string;
}

const SearchNftName: React.FC<SearchNftNameProps> = ({
  onChangeKeyword,
  keyword,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChangeKeyword(event.target.value);
  };

  return (
    <Input
      id="filled-search"
      variant="flushed"
      placeholder="Enter the keyword"
      size="md"
      className="filter"
      value={keyword}
      onChange={handleChange}
      width={300}
      marginBottom={10}
    />
  );
};

export default SearchNftName;
