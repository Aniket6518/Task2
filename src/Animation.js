import React from "react";
import Lottie from "react-lottie";
import * as loading from "./Lottie/rubiks_cube.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LoadingAnime = (props) => {
  return (
    <>
      {props.loading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : null}
    </>
  );
};

export default LoadingAnime;
