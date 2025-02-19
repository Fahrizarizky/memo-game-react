import { useState } from "react";
import Card from "./Card";
// import IconVite from "./assets/vite.svg";
import * as Image from "./assets";

function App() {
  const myName = "arsadi";
  const [update, setUpdate] = useState(1);

  return (
    <div className="">
      <h1 className="text-6xl">Hello {myName}</h1>
      <Card
        metadata={{
          title: <h2 className="text-5xl font-bold">Card Pertama</h2>,
          description: "Card pertama ini sangat awesome",
          amount: 10 + update
        }}
      >
        <img src={Image.DCBiru} alt="" />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
        laudantium.
      </Card>
      <button onClick={() => setUpdate(update + 1)}>Click</button>
    </div>
  );
}

export default App;
