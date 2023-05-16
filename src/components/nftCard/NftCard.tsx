import React from "react";
import { Flex, Spacer, Box, Text } from "@chakra-ui/react";

import { NFTItem } from "../../types";
import "./style.scss";

type NFTItemProps = {
  item: NFTItem;
};

const NFTCard: React.FC<NFTItemProps> = ({ item }: NFTItemProps) => {
  return (
    <Box className="nft-card">
      <img src={item.img} alt="Avatar" className="image" />
      <Box className="overlay">
        <Flex>
          <Text>{item.title}</Text>
          <Spacer />
          <Text>{item.price}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default NFTCard;
