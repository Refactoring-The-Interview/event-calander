import { Card } from "react-bootstrap";
import { Event } from "../../../../Apis/Types";

interface Props {
    value: Event;
    setValue(value: Event): void;
}

export const EditJoined = ({ value, setValue }: Props) => {
    const { joined } = value;

    if (!joined) {
        return <div>Loading...</div>;
    }

    return (
        <Card>
            <Card.Header>Participants</Card.Header>
            <Card.Body>
                {joined.map((person) => {
                    return <div>{person}</div>;
                })}
            </Card.Body>
        </Card>
    );
};
