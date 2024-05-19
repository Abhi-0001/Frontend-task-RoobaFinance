import { GrLocation } from "react-icons/gr";
import VerticalMarque from "./VerticalMarque";
import { LuAlarmClock } from "react-icons/lu";
import Customers from "./Customers";
import Button from "../ui/Button";

function RightBox({ isEvent }) {
  return (
    <div className="relative w-[35%] px-6  py-8 md:w-[40%] ">
      {/* absolute moving Marquee between both flex boxes */}
      <VerticalMarque />

      {/* Top Heading */}
      <div className="w-[50%]">
        <h2 className="mb-12 text-base font-bold">
          Explore Your First {isEvent ? "Event" : "Collectible"}
        </h2>
      </div>

      {/* Main Heading  */}
      <h1 className="mb-2 text-3xl font-bold">
        {isEvent ? "Event Name" : "Meta Lives"}
      </h1>

      {/* Conditionally rendering items as per collection and event */}
      {isEvent ? (
        // for Event Tab
        <div className="mb-4 flex gap-2 text-xs">
          {/* icon */}
          <div className="flex items-center justify-between gap-1">
            <GrLocation />
            <p className=" font-semibold ">Venue</p>
          </div>
          {/* date */}
          <div className="flex items-center justify-between gap-1">
            <LuAlarmClock />
            <p>04/3/2024 @19:00</p>
          </div>
        </div>
      ) : (
        // For Collection Tab
        <h3 className="mb-1 text-sm">Live in Astrix</h3>
      )}

      {/* Description for Event/Collection */}
      <p className="mb-2 text-[0.6rem]">
        {isEvent
          ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium unde error neque libero molestias architect iure omnis totam ducimus vel iusto nobis accusantium deleniti aperiam"
          : "laudantium neque dolore laborum quia architecto nesciunt omnis totam ducimus vel iusto nobis accusantium delen quibusdam eveniet numquam expedita, a vero?"}
      </p>

      <Customers isEvent={isEvent} />

      <div
        className={`${isEvent ? "mt-8 md:mt-16 " : "mt-1 md:mt-2"} flex items-center justify-between`}
      >
        {isEvent && (
          <img src="/qr.jpg" alt="QR Code" className="w-16 rounded-lg" />
        )}
        {!isEvent && <div></div>}
        <Button
          type={"primary"}
          customStyle={`${!isEvent && "justify-self-end"} p`}
        >
          Join Waitlist
        </Button>
      </div>
    </div>
  );
}

export default RightBox;
