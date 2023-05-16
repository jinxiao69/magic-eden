import React, { ChangeEvent } from "react";
import { Textarea } from "@chakra-ui/react";

interface SearchNftNameProps {
  onChangeKeyword: (name: string) => void;
  keyword: string;
}

const SearchNftName: React.FC<SearchNftNameProps> = ({
  onChangeKeyword,
  keyword,
}) => {
  const onChangeKeyword1 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    onChangeKeyword(event.target.value);
  };

  return (
    <Textarea
      id="filled-search"
      variant="filled"
      size="small"
      className="filter"
      value={keyword}
      onChange={onChangeKeyword1}
      width={500}
      height={10}
      marginBottom={10}
    />
  );
};

export default SearchNftName;
