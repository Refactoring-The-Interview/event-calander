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
                <Card.Text>
                    <h4>
                        <Badge bg="warning">Event</Badge>
                        <div>{eventName}</div>
                    </h4>
                </Card.Text>
            </Card.Header>
            <Card.Body className="Description">
                <Card.Text>
                    <p>{description}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
