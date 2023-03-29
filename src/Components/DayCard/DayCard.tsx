import { Button, Card } from "react-bootstrap";
import { EventDay } from "../../Apis/Types";
import "./DayCardS.scss";

interface Props {
    event: EventDay;
}

export const DayCard = ({ event }: Props) => {
    const { date, day } = event;
    return (
        <div className="DayCard">
            <Card>
                <Card.Header>
                    <h3>{date}</h3>
                    <Button>Info</Button>
                </Card.Header>
                <Card.Body></Card.Body>
            </Card>
        </div>
    );
};
