import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useState } from "react";
import CarouselListItem from "./CarouselListItem";

function Carousel({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // specifying end point for carousel
  const dataLen = data.length;
  const end = dataLen;

  const updateState = (ind) => {
    if (ind < 0) return;
    else if (ind >= end) {
      setActiveIndex(0);
    } else {
      setActiveIndex(ind);
    }
  };

  return (
    <div className="relative overflow-hidden transition-all">
      <div
        className="flex w-full items-center justify-between gap-4 pb-[2px] transition-all duration-300 ease-out"
        style={{
          transform: `translate(-${activeIndex * (120 / dataLen)}%)`,
        }}
      >
        {data.map((imgLink, index) => (
          <CarouselListItem
            isActive={false}
            img={imgLink}
            key={index}
            type="small"
          />
        ))}
      </div>
      <button
        className="absolute bottom-[-0.1rem] left-0"
        onClick={() => updateState(activeIndex - 1)}
      >
        <IoArrowBack />
      </button>
      <button
        className="absolute bottom-[-0.1rem] left-4"
        onClick={() => updateState(activeIndex + 1)}
      >
        <IoArrowForward />
      </button>
    </div>
  );
}

export default Carousel;
