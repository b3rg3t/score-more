import { GET_STORAGE } from "./localStorage";

const CheckURL = () => {
  let BASE_URL: any;
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    BASE_URL = process.env.REACT_APP_BASE_URL;
  } else {
    BASE_URL = window.location.origin;
  }
  return BASE_URL;
};


const GetGames = () => {
  const storageGames = GET_STORAGE("games");
  if (storageGames?.gameIds?.length) {
   return storageGames.gameIds;
  } else {
    return [];
  }
}

export { CheckURL, GetGames };
