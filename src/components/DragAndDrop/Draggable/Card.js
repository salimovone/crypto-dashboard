import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
const style = {
  width: "100%",
  padding: "1rem",
  cursor: "move",
};
export const Card = ({ id, text, index, moveCard, title }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleX =
        (hoverBoundingRect.left - hoverBoundingRect.right) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientX = clientOffset.x - hoverBoundingRect.right;

      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div
      className="transaction_card"
      ref={ref}
      style={{ ...style, opacity }}
      data-handler-id={handlerId}
    >
      <p className="text-base text-left font-bold">{title}</p>
      <p className="text-left">{text}</p>
    </div>
  );
};
