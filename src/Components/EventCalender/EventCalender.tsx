import { useContext } from "react";
import { MyCalenderContext } from "../Context/CalenderContext";
import { DayCard } from "../DayCard/DayCard";
import "./EventCalenderS.scss";

export const EventCalender = () => {
    const { events } = useContext(MyCalenderContext);

    return (
        <div className="EventCalender">
            {events.map((event, index) => {
                return <DayCard event={event} key={index} />;
            })}
        </div>
    );
};
