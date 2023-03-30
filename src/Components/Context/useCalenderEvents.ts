import { useState } from "react";
import { EventDay } from "../../Apis/Types";
import { DummyEvents } from "../../Apis/Utils";

export const useCalenderEvents = () => {
    const [events, setEvents] = useState<EventDay[]>(DummyEvents());

    return {
        events,
        setEvents,
    };
};
