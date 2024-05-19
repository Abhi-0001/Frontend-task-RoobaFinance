import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

function EventCard({ isEvent, setEvent }) {
  return (
    <div className="my-2 flex h-full max-w-[48rem] flex-[1_auto] items-start justify-between  overflow-hidden bg-greybg px-2 font-semibold text-white md:max-w-[56rem] md:px-4">
      {/* Left Box of UI */}
      <LeftBox isEvent={isEvent} setEvent={setEvent} />

      {/* Right Box of UI */}
      <RightBox isEvent={isEvent} />
    </div>
  );
}

export default EventCard;
