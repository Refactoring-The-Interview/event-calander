import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Event, EventDay } from "../../Apis/Types";
import { MyCalenderContext } from "../Context/CalenderContext";

export const EventPage = () => {
    const { eventId } = useParams();
    const { events } = useContext(MyCalenderContext);

    const day: EventDay | undefined = events.find((day) => {
        return day.events.find((event) => {
            return event.eventId === eventId;
        });
    });
    const event: Event | undefined = day?.events.find((event) => {
        return event.eventId === eventId;
    });

    if (!event) {
        return <>Loading...</>;
    }

    const { eventName, joined, location, eventLeader, description, otherInfo } =
        event;

    return <div className="EventPage"></div>;
};
