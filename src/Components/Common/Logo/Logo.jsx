import React from "react";
import { LazyLoadedImage } from "../../Common/LazyLoadedImage/LazyLoadedImage";
import LogoImage from "../../../Assets/Logo/Logo4.jpg";
import { Link } from "react-router-dom";
export const Logo = ({ ...rest }) => {
  return (
    <Link to="/">
      <LazyLoadedImage
        ImageProps={{
          paddingInline: "10px",
          background: "black",
        }}
        borderRadius="lg"
        src={LogoImage}
        w="180px"
        {...rest}
      />
    </Link>
  );
};
