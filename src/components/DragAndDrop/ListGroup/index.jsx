import Example from "./example";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default () => {
  return (
    <div className="transaction_card mt-5 p-5">
      <h1 className="text-left font-bold text-base">
        Basic List Group Sortable
      </h1>
      <div className="mt-3">
        <DndProvider backend={HTML5Backend}>
          <Example />
        </DndProvider>
      </div>
    </div>
  );
};
