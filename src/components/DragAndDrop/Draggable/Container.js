import update from "immutability-helper";
import { useCallback, useState } from "react";
import { Card } from "./Card.js";
const style = {
  width: "100%",
};
export const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        title: "Draggable Card 1",
        text: "Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu piepowder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.",
      },
      {
        id: 2,
        title: "Draggable Card 2",
        text: "Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu piepowder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.",
      },
      {
        id: 3,
        title: "Draggable Card 3",
        text: "Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu piepowder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.",
      },
    ]);
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    }, []);
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          title={card.title}
          text={card.text}
          moveCard={moveCard}
        />
      );
    }, []);
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={style}>
          {cards.map((card, i) => renderCard(card, i))}
        </div>
      </>
    );
  }
};
