import { Badge, Button, Card } from "react-bootstrap";
import { EventDay } from "../../Apis/Types";
import "./DayCardS.scss";

interface Props {
    event: EventDay;
}

export const DayCard = ({ event }: Props) => {
    const { date, day, events } = event;

    return (
        <div className="DayCard">
            <Card>
                <Card.Header className="EventHeader">
                    <Badge bg="warning">
                        <h3>{date}</h3>
                    </Badge>
                    <h3>Day</h3>
                </Card.Header>
                <Card.Body className="CardEvents">
                    {events.map((event) => {
                        const { eventName } = event;
                        return (
                            <div className="Event">
                                {eventName}
                                <Button variant="outline-primary">Info</Button>
                            </div>
                        );
                    })}
                </Card.Body>
            </Card>
        </div>
    );
};
