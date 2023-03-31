import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Event, EventDay, Paths } from "../../Apis/Types";
import { pathGenEditEvent } from "../../Apis/Utils";
import { MyCalenderContext } from "../Context/CalenderContext";
import { JoinFormCard } from "./EventPageCards/JoinFormCard/JoinFormCard";
import { LocationLeaderCard } from "./EventPageCards/LocationLeaderCard/LocationLeaderCard";
import { NameDescriptionCard } from "./EventPageCards/NameDescriptionCard/NameDescriptionCard";
import "./EventPageS.scss";

export const EventPage = () => {
    const { eventId } = useParams();
    const { events } = useContext(MyCalenderContext);
    const [eventState, setEventState] = useState<Event | any>({});
    const navigate = useNavigate();

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

    if (!eventId) {
        return <div>Loading...</div>;
    }

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
                <Button
                    onClick={() => {
                        navigate(pathGenEditEvent[Paths.EditEvent](eventId));
                    }}
                >
                    Edit Event
                </Button>
            </div>
        </div>
    );
};
