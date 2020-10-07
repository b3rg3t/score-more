import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { GET_API } from "../components/utils/api";

import Backend from "i18next-http-backend";

let BASE_URL;

const CheckURL = () => {
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    BASE_URL = "";
  } else {
    BASE_URL = window.location.href.substring(
      0,
      window.location.href.length - 10
    );
  }
};
CheckURL();

const Languages = ["en", "sv"];

const options = {
  fallbackLng: "en",
  preload: Languages,
  debug: false,
  backend: {
    loadPath: `${BASE_URL}locales/{{lng}}/{{ns}}.json`,
  },
  whitelist: Languages,
};
const languageDetect: any = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async (callback: any) => {
    const response = await GET_API("/v1/api/users?id=0");
    if (response) {
      callback(response.data[0].AUSR_Language);
    } else {
      callback()
    }
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n.use(Backend).use(languageDetect).use(initReactI18next).init(options);
export default i18n;
