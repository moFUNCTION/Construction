import React from "react";
import { LazyLoadedImage } from "../../Common/LazyLoadedImage/LazyLoadedImage";
import LogoImage from "../../../Assets/Logo/Logo.png";
export const Logo = ({ ...rest }) => {
  return <LazyLoadedImage src={LogoImage} w="180px" {...rest} />;
};
