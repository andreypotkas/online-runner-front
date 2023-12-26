import React from "react";

import EventCard from "./components/EventCard";

function Events() {
  return (
    <div className="layout-main-container">
      <section className="grid justify-content-center">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </section>
    </div>
  );
}

const MemoizedEvents = React.memo(Events);
export default MemoizedEvents;
