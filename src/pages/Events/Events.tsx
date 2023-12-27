import React, { useEffect } from "react";

import { useEventsState } from "@/state/events.state";

import EventCard from "./components/EventCard/EventCard";

function Events() {
  const { events, getAll } = useEventsState();

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <div className="layout-main-container">
      <section className="grid justify-content-center">
        {events
          ? events.map((item) => <EventCard event={item} key={item.id} />)
          : "Loading"}
      </section>
    </div>
  );
}

const MemoizedEvents = React.memo(Events);
export default MemoizedEvents;
