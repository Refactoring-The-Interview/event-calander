import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyCalenderContext } from "../Context/CalenderContext";

export const EventPage = () => {
    const { eventId } = useParams();
    const { events } = useContext(MyCalenderContext);

    const eventInfo = events.find((event) => {
        return event.events.find((event) => {
            return event.eventId === eventId;
        });
    });
    console.log(eventInfo);

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
