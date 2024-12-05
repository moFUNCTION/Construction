import { useTranslation } from "react-i18next";

export const useTranslator = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    content: i18n.t,
  };
};
