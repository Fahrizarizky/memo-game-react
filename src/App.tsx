import { useCallback, useMemo, useRef, useState } from "react";
import Card from "./components/Card";
import { CardCollections } from "./utils/utils";

function App() {
  const myName = useMemo(() => "Arsadi", []);
  const calculateNumber = useCallback(() => {
    console.log("calculate number!!!");
  }, []);

  const updateCount = useRef<number>(0);
  const [update, setUpdate] = useState<number>(0);
  console.log({ updateCount });

  return (
    <div className="">
      <h1
        onClick={() => {
          alert("update count " + updateCount.current);
        }}
        className="text-6xl"
      >
        Hello {myName}
      </h1>
      {CardCollections.map((card) => {
        return <Card image={card.image} />;
      })}
      <button
        onClick={() => {
          // setUpdate(update + 1);
          // const newUpdate = update + 1;

          updateCount.current += 1;
          setUpdate(update + 1);
          calculateNumber();

          // setUpdate(newUpdate);
          // setNumberOfClick(newUpdate + 1);
          // console.log('click ', {newUpdate});
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
