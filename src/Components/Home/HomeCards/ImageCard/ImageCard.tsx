import { Card } from "react-bootstrap";
import { ImageCarousel } from "../../../ImageCarousel/ImageCarousel";

export const ImageCard = () => {
    return (
        <Card>
            <Card.Body>
                <ImageCarousel />
            </Card.Body>
        </Card>
    );
};
