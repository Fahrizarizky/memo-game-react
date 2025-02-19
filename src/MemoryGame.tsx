import React from "react";
import Card from "./components/Card";
import useMemoryGame from "./hooks/useMemoryGame";
import CompleteModal from "./components/CompleteModal";
import { useStopwatch } from "react-timer-hook";
import { formatTime } from "./utils/utils";

const MemoryGame: React.FC = () => {
  const { minutes, seconds, pause, reset } = useStopwatch({ autoStart: true });
  const {
    cards,
    handleOpenCard,
    selectedCards,
    hasComplete,
    goToNextLevel,
    hasNextLevel,
    level
  } = useMemoryGame({
    pauseTimer: pause,
    resetTimer: reset,
    minutes,
    seconds,
  });

  return (
    <div>
      <div className="w-full flex justify-center mb-4 font-mono">
        <p className="text-4xl">
          {formatTime({
            minutes,
            seconds,
          })}
        </p>
      </div>
      <section className="grid grid-cols-4 w-fit mx-auto gap-2">
        <CompleteModal
          time={{
            minutes,
            seconds,
          }}
          level={level}
          showNext={hasNextLevel}
          onClickNext={goToNextLevel}
          open={hasComplete}
        />
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
    </div>
  );
};

export default MemoryGame;
