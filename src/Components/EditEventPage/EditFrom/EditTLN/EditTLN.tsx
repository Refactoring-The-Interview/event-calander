import { Card, FormGroup } from "react-bootstrap";
import { Event } from "../../../../Apis/Types";
import { FormInput } from "../../FormInput/FormInput";

interface Props {
    value: Event;
    setValue(value: Event): void;
}

export const EditTLN = ({ value, setValue }: Props) => {
    const { endTime, startTime, eventLeader, location } = value;
    //todo make time its own component and refactor time to use input adaptable time
    return (
        <Card>
            <Card.Header>Event Time, Location & Organizers Name</Card.Header>
            <Card.Body>
                <FormGroup>
                    <FormInput
                        value={startTime}
                        setValue={(startTime) => {
                            setValue({
                                ...value,
                                startTime,
                            });
                        }}
                        title={"Start Time"}
                        type="time"
                    />
                    <FormInput
                        value={endTime}
                        setValue={(endTime) => {
                            setValue({
                                ...value,
                                endTime,
                            });
                        }}
                        title={"End Time"}
                        type="time"
                    />
                </FormGroup>

                <FormInput
                    value={eventLeader}
                    setValue={(eventLeader) => {
                        setValue({
                            ...value,
                            eventLeader,
                        });
                    }}
                    title={"Organizers Name"}
                />

                <FormInput
                    value={location}
                    setValue={(location) => {
                        setValue({
                            ...value,
                            location,
                        });
                    }}
                    title={"Event Location"}
                />
            </Card.Body>
        </Card>
    );
};
