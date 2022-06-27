import { Medium_Card } from "..";
import Image from "next/image";

const MediumCard: React.FC<Medium_Card> = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-40 w-40">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
