import React from "react";
import Navbar from "../../../components/Navbar";
import ListGroup from "../../../components/DragAndDrop/ListGroup";
import Draggable from "../../../components/DragAndDrop/Draggable";

const DragAndDrop = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5 ">
        <h1 className="text-xl text-left font-bold text-[var(--main-color)]">
          Drag & Drop
        </h1>
        <div>
          <Draggable />
        </div>
        <div>
          <ListGroup />
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
