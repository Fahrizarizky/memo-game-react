import { ReactNode } from "react";

type CardProps = {
  metadata: {
    title: ReactNode;
    description?: string;
    amount: number;
    data?: {
        name: string;
        age: number;
    }
  };
  children?: ReactNode;
};

const Card: React.FC<CardProps> = ({ metadata, children }) => {
  let additional = 5;

  additional++;

  return (
    <div className="w-52 aspect-square bg-blue-300 rounded-xl">
      {metadata?.title}
      <p>{metadata.description}</p>
      <span>{metadata.amount + additional}</span>
      {children}
    </div>
  );
};

export default Card;
