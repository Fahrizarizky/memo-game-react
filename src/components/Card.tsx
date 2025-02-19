import { useState } from "react";
// import Astro from "../assets/cards/astro.jpg";
import BackCard from "../assets/cards/back-cover-2.jpg";

const Card: React.FC<{image: string}> = ({image}) => {
  const [open, setOpen] = useState<boolean>(false);

  // Arbitrary values;
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`relative w-24 aspect-[3/4] ${
        open ? "[transform:rotateY(180deg)]" : "hover:scale-105"
      } [transform-style:preserve-3d] transition-all duration-300 cursor-pointer`}
    >
      <div className=" w-full h-full bg-blue-300 absolute [backface-visibility:hidden] ">
        <img src={BackCard} alt="" />
      </div>
      <div className=" w-full h-full bg-red-300 absolute [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Card;
