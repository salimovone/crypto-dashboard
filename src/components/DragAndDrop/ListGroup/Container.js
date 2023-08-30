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
        user: "Darren Elder",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      },
      {
        id: 2,
        user: "Linda Ellis",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      },
      {
        id: 3,
        user: "Tony Ritch",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      },
      {
        id: 4,
        user: "Flora Jeg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      },
      {
        id: 5,
        user: "Linda Marris",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
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
          user={card.user}
          text={card.text}
          moveCard={moveCard}
        />
      );
    }, []);
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};
