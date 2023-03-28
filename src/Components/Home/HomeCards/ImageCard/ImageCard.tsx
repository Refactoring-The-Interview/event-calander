import { Card } from "react-bootstrap";
import { ImageCarousel } from "../../../ImageCarousel/ImageCarousel";
import InsideStore from "../../../../Assets/Images/cropped-store-image.png";
import StoreFront from "../../../../Assets/Images/storeFront-lvlG.jpeg";
import GameWall from "../../../../Assets/Images/gameWall-lvlG.jpeg";

export const ImageCard = () => {
    const images = [StoreFront, InsideStore, GameWall];
    return (
        <Card>
            <Card.Body>
                <ImageCarousel images={images} />
            </Card.Body>
        </Card>
    );
};
