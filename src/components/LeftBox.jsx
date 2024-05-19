import Button from "../ui/Button";
import CarouselAutoMove from "./CarouselAutoMove";

const carouselData = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];

const carouselData1 = ["/img3.jpg", "/img2.jpg", "/img4.jpg", "/img1.jpg"];

function LeftBox({ isEvent, setEvent }) {
  function handleEventClick() {
    setEvent(true);
  }
  function handleCollectionClick() {
    setEvent(false);
  }
  return (
    <div className="relative flex h-full max-w-[60%] flex-col items-start justify-between overflow-hidden md:max-w-[55%]">
      {/* Background text */}
      <p className="absolute left-1 top-16 text-9xl text-gray-500">Astrix</p>
      <p className="absolute left-1 top-52 text-9xl text-gray-500">Events</p>

      {/* Brand Logo BOX */}
      <div className="my-2 flex cursor-pointer items-center text-yellowbg">
        <img src="/logo1.png" alt="brand logo" className="w-16" />
        <p className="text-2xl font-bold"> Astrix</p>
      </div>

      {/* Carousels */}
      {isEvent ? (
        <CarouselAutoMove
          data={carouselData}
          isImgHeading={true}
          imgHeading={"Lunar Palace:"}
          subHeading={"(ft. Kanye west)"}
        />
      ) : (
        <CarouselAutoMove data={carouselData1} />
      )}

      {/* Buttons for state(tab) change */}
      <div className="flex pb-8">
        <Button
          type={"secondary"}
          onClick={handleEventClick}
          customStyle={`${isEvent ? "z-50 bg-gray-700 " : " bg-gray-800 "} px-6 py-0.5  md:px-12  md:py-1.5`}
        >
          Event
        </Button>
        <Button
          type={"secondary"}
          onClick={handleCollectionClick}
          customStyle={` ${isEvent ? " bg-gray-800 " : "z-50 bg-gray-700 "}  ml-[-28px]  px-6 py-0.5 md:px-10 md:py-1.5`}
        >
          Collection
        </Button>
      </div>
    </div>
  );
}

export default LeftBox;
