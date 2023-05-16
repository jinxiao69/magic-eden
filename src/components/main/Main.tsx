import React, { useState, useEffect } from "react";
import axios from "axios";
import NftCard from "../nftCard/NftCard";
import Search from "../search/Search";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import "../assets/css/MainPage.scss";

export interface NFTItem {
  img: string;
  title: string;
  price: number;
}

const Main = () => {
  const [nfts, setNfts] = useState<NFTItem[]>([]);
  const [keyword, setkeyword] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setOffset((prevOffset) => prevOffset + 20);
    }
  };

  useEffect(() => {
    const fetchNFTData = async () => {
      const res = await axios.get(
        `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=16&offset=${offset}`
      );
      setNfts([...nfts, ...res.data.results]);
    };
    fetchNFTData();
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onChangeKeyword = (keyword: string) => {
    setkeyword(keyword);
  };

  const filteredNfts = nfts.filter((nft) =>
    nft.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <Search keyword={keyword} onChangeKeyword={onChangeKeyword} />
      <Box className="content">
        <Grid
          templateColumns="repeat(4, 1fr)"
          templateRows="repeat(1,1fr)"
          gap={6}
        >
          {filteredNfts.map((nft, index) => (
            <GridItem key={index}>
              <NftCard key={index} item={nft} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Main;
