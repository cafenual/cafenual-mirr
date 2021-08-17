import React from "react";
import "./styles.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Sidemenu from "layouts/Sidemenu/Sidemenu";

const Scheduler = () => {
  const events = [
    {
      id: 1,
      title: "event 1",
      start: "2021-08-14T10:00:00",
      end: "2021-08-14T12:00:00",
    },
    {
      id: 2,
      title: "event 2",
      start: "2021-08-16T13:00:00",
      end: "2021-08-16T18:00:00",
    },
    {
      id: 3,
      title: "event 3",
      start: "2021-08-17",
      end: "2021-08-20",
    },
    {
      id: 4,
      title: "알바면접",
      start: "2021-08-18",
      end: "2021-08-18",
    },
  ];

  return (
    <>
      <Sidemenu />
      <div id="scheduler">
        <div className="scheduleAdd"></div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            center: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
        />
      </div>
    </>
  );
};

export default Scheduler;
