import { useContext, useEffect, useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Form, useNavigate, useParams } from "react-router-dom";
import { Event, EventDay } from "../../Apis/Types";
import { MyCalenderContext } from "../Context/CalenderContext";
import "./EditEventPageS.scss";
import { EditFrom } from "./EditFrom/EditFrom";

export const EditEventPage = () => {
    const { eventId } = useParams();
    const { events } = useContext(MyCalenderContext);
    const [editedEvent, setEditEvent] = useState<Event | any>({});
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
        setEditEvent(event);
    }, [event]);

    if (!editedEvent) {
        return <div>Loading...</div>;
    }

    return (
        <Form className="EditEvent">
            <Card className="EditEventContainerFormCard">
                <Card.Header>
                    <Card.Title>Edit Event</Card.Title>
                </Card.Header>
                <Card.Body className="EventEditFromCardBody">
                    <EditFrom value={editedEvent} setValue={setEditEvent} />
                </Card.Body>
            </Card>

            <ButtonGroup>
                <Button>Save Edits</Button>
                <Button variant="danger">Cancel</Button>
            </ButtonGroup>
        </Form>
    );
};
