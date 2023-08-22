import React from "react";
import { Button } from "./style";
import { ToastContainer } from "react-toastify";

export default (props) => {
  return (
    <div>
      <Button {...props} onClick={props.onClik}>
        {props.title}
      </Button>
      <ToastContainer />
    </div>
  );
};
