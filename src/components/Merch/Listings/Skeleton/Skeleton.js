import React from "react";
import ListingSkel from "./ListingSkel/ListingSkel";

const Skeleton = ({ count }) => {
  const length = count ? count : 8;
  const skeletons = [];
  for (let i = 0; i < length; i++) {
    skeletons.push(<ListingSkel />);
  }

  return <>{skeletons}</>;
};

export default Skeleton;
