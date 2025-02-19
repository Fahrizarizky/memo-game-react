import { useMemo, useState } from "react";

import {
  CardCollections,
  getRandomIndex,
  ICardInfo,
  shuffle,
} from "../utils/utils";
import { v4 as uuid } from "uuid";

const useMemoryGame = () => {
  const firstCardIndexes = useMemo(() => {
    return getRandomIndex({
      amountOfCards: CardCollections.length,
      uniqueCards: 4,
    });
  }, []);

  const [cards, setCards] = useState<ICardInfo[]>(
    shuffle(firstCardIndexes.concat(firstCardIndexes)).map((index) => ({
      ...CardCollections[index],
      id: uuid(),
    }))
  );

  const [selectedCards, setSelectedCards] = useState<ICardInfo[]>([]);

  const handleOpenCard = (card: ICardInfo) => {
    setSelectedCards((selected) =>
      selected.includes(card)
        ? selected
        : [...selected, { ...card, open: true }]
    );

    if (selectedCards.length > 0 && selectedCards.length % 2 === 1) {
      const isMatch =
        selectedCards[selectedCards.length - 1].code === card.code;

      if (!isMatch) {
        setTimeout(() => {
          setSelectedCards((selected) =>
            selected.filter((card, index) => index < selected.length - 2)
          );
        }, 500);
      }
    }
  };

  return { cards, handleOpenCard, selectedCards };
};

export default useMemoryGame;
