import { useState } from "react";
import EventCard from "./components/EventCard";

function App() {
  const [isEvent, setIsEvent] = useState(true);
  return (
    <div className="h-screen bg-black font-sans">
      <div className="mx-auto h-full max-w-[50rem]">
        <EventCard isEvent={isEvent} setEvent={setIsEvent} />
      </div>
    </div>
  );
}

export default App;
