import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyCalenderContext } from "../Context/CalenderContext";

export const EventPage = () => {
    const { eventId } = useParams();
    const { events } = useContext(MyCalenderContext);

    const day = events.find((day) => {
        return day.events.find((event) => {
            return event.eventId === eventId;
        });
    });
    const event = day?.events.find((event) => {
        return event.eventId === eventId;
    });

    console.log(event);

    return (
        <div>
            <h3>event</h3>
            <h3>event</h3>
            <h3>event</h3>
            <h3>event</h3>
            <h3>event</h3>
            <h3>event</h3>
        </div>
    );
};
