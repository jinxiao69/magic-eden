import React from "react";
import { Flex, Spacer, Box, Text } from "@chakra-ui/react";
import { NFTItem } from "../main/Main";
import "../assets/css/MainPage.scss";

type NFTItemProps = {
  item: NFTItem;
};

const NftCard: React.FC<NFTItemProps> = ({ item }: NFTItemProps) => {
  return (
    <Box className="container">
      <Box className="image">
        <img src={item.img} alt="Avatar" />
      </Box>
      <Box className="overlay">
        <Box>
          <Flex>
            <Text>{item.title}</Text>
            <Spacer />
            <Text>{item.price}</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default NftCard;
