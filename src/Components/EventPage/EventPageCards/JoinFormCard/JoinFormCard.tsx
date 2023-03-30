import { useState } from "react";
import { Badge, Button, Card, Form } from "react-bootstrap";
import { Event } from "../../../../Apis/Types";
import "./JoinFormCardS.scss";

interface Props {
    value: Event;
    setValue(value: Event): void;
}

export const JoinFormCard = ({ value, setValue }: Props) => {
    const [newParticipant, setNewParticipant] = useState<string>("");
    const { joined } = value;
    return (
        <Card className="JoinFormCard">
            <Card.Header>
                <Card.Title>
                    <Badge>{joined?.length} / 20</Badge>
                    Participants
                </Card.Title>
            </Card.Header>

            <Card.Body>
                <Form
                    className="JoinForm"
                    onSubmit={(e) => {
                        e.preventDefault();
                        joined.push(newParticipant);
                        setValue({
                            ...value,
                            joined,
                        });
                        setNewParticipant("");
                    }}
                >
                    <label>
                        Sign Up:
                        <input
                            placeholder="Enter Name To Join"
                            value={newParticipant}
                            required
                            onChange={(e) => {
                                const value = e.target.value;
                                setNewParticipant(value);
                            }}
                        />
                    </label>
                    <Button type="submit" variant="outline-primary">
                        Join
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};
