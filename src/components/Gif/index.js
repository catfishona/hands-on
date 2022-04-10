import React from "react";
import { string } from "prop-types";

const ImageComponent = (props) => {
  return (
    <div>
      <img src={props.url} alt="gif"></img>
      <p>{props.title}</p>
    </div>
  );
};

ImageComponent.propTypes = {
  url: string,
  title: string,
};
export { ImageComponent };
