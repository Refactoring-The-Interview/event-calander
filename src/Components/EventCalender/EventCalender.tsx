import { useState } from "react";
import { EventDay } from "../../Apis/Types";
import { DummyEvents } from "../../Apis/Utils";
import { DayCard } from "../DayCard/DayCard";
import "./EventCalenderS.scss";

export const EventCalender = () => {
    const [dummyEvents, setDummyEvents] = useState<EventDay[]>(DummyEvents());

    return (
        <div className="EventCalender">
            {dummyEvents.map((event, index) => {
                return <DayCard event={event} />;
            })}
        </div>
    );
};
