import { useCallback, useEffect, useState } from "react";
import CarouselListItem from "./CarouselListItem";

function CarouselAutoMove({ data, isImgHeading, imgHeading, subHeading }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // specifying end point for carousel
  const dataLen = data.length;
  const end = dataLen;

  const updateState = useCallback((ind) => {
    if (ind < 0) return;
    else if (ind >= end) {
      setActiveIndex(0);
    } else {
      setActiveIndex(ind);
    }
  });

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      updateState(activeIndex + 1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [activeIndex, updateState]);

  return (
    <div
      className="transition-all"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="2000"
    >
      <div
        className="flex items-center justify-between gap-4 pl-[6rem] transition-all duration-500 ease-in-out"
        style={{
          transform: `translate(-${activeIndex * (92 / dataLen)}%)`,
        }}
      >
        {isImgHeading
          ? data.map((imgLink, index) => (
              <CarouselListItem
                key={index}
                img={imgLink}
                isImgHeading={true}
                imgHeading={imgHeading}
                subHeading={subHeading}
                itemHeight={24}
                itemWidth={16}
              />
            ))
          : data.map((imgLink, index) => (
              <CarouselListItem
                isActive={index === activeIndex}
                img={imgLink}
                key={index}
                isImgHeading={false}
                type="large"
              />
            ))}
      </div>
    </div>
  );
}

export default CarouselAutoMove;
