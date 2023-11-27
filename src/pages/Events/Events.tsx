import React from "react";

import EventCard from "./components/EventCard";

function Events() {
  return (
    <div className="surface-ground px-4 py-8 md:px-6 lg:px-8 layout-main-container">
      <section className="grid">
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
