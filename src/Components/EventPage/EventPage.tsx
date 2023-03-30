import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Event, EventDay } from "../../Apis/Types";
import { MyCalenderContext } from "../Context/CalenderContext";
import { JoinFormCard } from "./EventPageCards/JoinFormCard/JoinFormCard";
import { LocationLeaderCard } from "./EventPageCards/LocationLeaderCard/LocationLeaderCard";
import { NameDescriptionCard } from "./EventPageCards/NameDescriptionCard/NameDescriptionCard";
import './EventPageS.scss';

export const EventPage = () => {
    const { eventId } = useParams();
    const { events } = useContext(MyCalenderContext);
    const [eventState, setEventState] = useState<Event | any>({});

    const day: EventDay | undefined = events.find((day) => {
        return day.events.find((event) => {
            return event.eventId === eventId;
        });
    });
    const event: Event | undefined = day?.events.find((event) => {
        return event.eventId === eventId;
    });

    useEffect(() => {
        setEventState(event);
    }, [event]);

    if (!event) {
        return <>Loading...</>;
    }

    const { eventName, description } = event;

    return (
        <div className="EventPage">
            <div className="mainCards">
                <NameDescriptionCard
                    eventName={eventName}
                    description={description}
                />
            </div>
            <div className="sideCards">
                <LocationLeaderCard event={event} />
                <JoinFormCard value={eventState} setValue={setEventState} />
            </div>
        </div>
    );
};
