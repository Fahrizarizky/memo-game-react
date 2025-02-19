import React from "react";
import Card from "./components/Card";
import useMemoryGame from "./hooks/useMemoryGame";

const MemoryGame: React.FC = () => {
  const { cards, handleOpenCard, selectedCards } = useMemoryGame();

  const myObject = {
    name: "arsadi",
    key: "123",
  };

  console.log("pertama : ", { ...myObject, key: "321" });
  console.log("kedua :", myObject);
  //

  return (
    <section className="grid grid-cols-4 w-fit mx-auto gap-2">
      {cards.map((card) => {
        return (
          <Card
            onClick={() => handleOpenCard(card)}
            image={card.image}
            key={card.id ?? ""}
            open={selectedCards
              .map((selected) => selected.id)
              .includes(card.id)}
          />
        );
      })}
    </section>
  );
};

export default MemoryGame;
