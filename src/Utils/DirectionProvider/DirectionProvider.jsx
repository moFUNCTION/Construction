// src/DirectionProvider.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const DirectionProvider = ({ children }) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return <>{children}</>;
};
