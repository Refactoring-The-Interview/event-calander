import { Card } from "react-bootstrap";
import { Event } from "../../../../Apis/Types";
import { FormInput } from "../../FormInput/FormInput";

interface Props {
    value: Event;
    setValue(value: Event): void;
}

export const EditND = ({ value, setValue }: Props) => {
    const { eventName, description } = value;
    return (
        <Card>
            <Card.Header>Event Name & Description</Card.Header>
            <Card.Body>
                <FormInput
                    value={eventName}
                    setValue={(eventName) => {
                        setValue({
                            ...value,
                            eventName,
                        });
                    }}
                    title={"Event Name"}
                />

                <FormInput
                    value={description}
                    setValue={(description) => {
                        setValue({
                            ...value,
                            description,
                        });
                    }}
                    type=""
                    title={"Event Description"}
                />
            </Card.Body>
        </Card>
    );
};
