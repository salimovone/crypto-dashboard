import React from "react";
import { Button } from "./style";

export default (props) => {
  return (
    <div>
      <Button {...props} onClick={props.onClick}>
        {props.text}
      </Button>
    </div>
  );
};
