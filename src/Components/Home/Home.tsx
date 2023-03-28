import { Badge, CardGroup } from "react-bootstrap";
import { AboutCard } from "./HomeCards/AboutCard/AboutCard";
import { ImageCard } from "./HomeCards/ImageCard/ImageCard";
import "./HomeS.scss";

export const Home = () => {
    return (
        <div className="Home">
            <Badge>
                <h1>LEVEL UP GAMES & HOBBIES</h1>
            </Badge>

            <CardGroup>
                <AboutCard />

                <ImageCard />
            </CardGroup>
        </div>
    );
};
