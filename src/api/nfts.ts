import axios from "axios";

const SERVER_URL = `https://api-mainnet.magiceden.io/idxv2`;

export const getNFTs = (offset: number) =>
  axios.get(
    `${SERVER_URL}/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${offset}`
  );
