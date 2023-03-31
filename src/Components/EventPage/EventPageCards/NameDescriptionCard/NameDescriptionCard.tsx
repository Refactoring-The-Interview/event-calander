import { Badge, Card } from "react-bootstrap";
import "./NameDescriptionCardS.scss";

interface Props {
    eventName: string;
    description: string;
}

export const NameDescriptionCard = ({ eventName, description }: Props) => {
    return (
        <Card className="NameDescriptionCard">
            <Card.Header className="CardTitle">
                <div>
                    <h4>
                        <Badge bg="warning">Event</Badge>
                        <div>{eventName}</div>
                    </h4>
                </div>
            </Card.Header>
            <Card.Body className="Description">
                <div>
                    <p>{description}</p>
                </div>
            </Card.Body>
        </Card>
    );
};
