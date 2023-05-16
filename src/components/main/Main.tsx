import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";

import Search from "../Search/Search";
import NFTCard from "../NFTCard/NftCard";
import { getNFTs } from "../../api";
import { NFTItem } from "../../types";

const Main = () => {
  const [items, setItems] = useState<NFTItem[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(true);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setOffset((prevOffset) => prevOffset + 20);
    }
  };

  useEffect(() => {
    const fetchNFTs = async () => {
      setIsLoaded(false);
      const { data } = await getNFTs(offset);
      setIsLoaded(true);
      setItems([...items, ...data.results]);
    };

    fetchNFTs();
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onChangeKeyword = (keyword: string) => {
    setKeyword(keyword);
  };

  const getItems = () =>
    items.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );

  return (
    <Container maxW="8xl" textAlign={"left"} p={[5, 5]}>
      <Heading>
        NFTs LIST <small>({getItems().length} items)</small>
      </Heading>
      <Search keyword={keyword} onChangeKeyword={onChangeKeyword} />
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={3}>
        {getItems().map((item, index) => (
          <Box key={index}>
            <NFTCard item={item} />
          </Box>
        ))}
      </SimpleGrid>
      {isLoaded && getItems().length === 0 && (
        <Heading size={"md"}>No items.</Heading>
      )}
      {!isLoaded && (
        <Box textAlign={"center"}>
          <Spinner
            m={[5, 5]}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      )}
    </Container>
  );
};

export default Main;
