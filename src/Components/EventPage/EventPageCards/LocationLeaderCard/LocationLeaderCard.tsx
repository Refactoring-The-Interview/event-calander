import { Card } from "react-bootstrap";
import { Event } from "../../../../Apis/Types";
import "./LocationLeaderCardS.scss";

interface Props {
    event: Event;
}

export const LocationLeaderCard = ({ event }: Props) => {
    const { location, eventLeader, startTime, endTime } = event;

    return (
        <Card className="LocationLeaderCard">
            <Card.Header className="LLHeader">
                <Card.Title>Location & Event organizer's name</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    Event Time: {`${startTime} to ${endTime}`}
                </Card.Text>
                <Card.Text>Location: {location}</Card.Text>
                <Card.Text>organizer's name: {eventLeader}</Card.Text>
            </Card.Body>
        </Card>
    );
};
