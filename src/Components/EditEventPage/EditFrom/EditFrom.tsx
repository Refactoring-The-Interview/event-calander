import { Button, FormGroup } from "react-bootstrap";
import { Form } from "react-router-dom";
import { Event } from "../../../Apis/Types";
import { EditJoined } from "./EditJoined/EditJoined";
import { EditND } from "./EditND/EditND";
import { EditTLN } from "./EditTLN/EditTLN";

interface Props {
    value: Event;
    setValue(value: Event): void;
}

export const EditFrom = ({ value, setValue }: Props) => {
    return (
        <FormGroup>
            <EditND value={value} setValue={setValue} />
            <EditTLN value={value} setValue={setValue} />
            <EditJoined value={value} setValue={setValue} />
        </FormGroup>
    );
};
