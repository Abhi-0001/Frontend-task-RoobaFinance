import { BsAsterisk } from "react-icons/bs";

function VerticalMarque() {
  return (
    /* absolute elelment vertical carousel */
    <marquee
      behavior="alternate"
      direction="right"
      className="absolute left-[-33rem] top-[50%] flex w-[64rem] rotate-90 items-center overflow-hidden bg-purplebg text-xl font-bold text-greybg"
    >
      <div className="font-display flex w-full items-center gap-4 py-2">
        <p>Event: Oasis Bus Tour, JLN Stadium, Delhi</p>
        <BsAsterisk />
        <p>Collection: at JLN, New Delhi</p>
      </div>
    </marquee>
  );
}

export default VerticalMarque;
