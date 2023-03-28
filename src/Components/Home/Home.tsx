import { AboutCard } from "./HomeCards/AboutCard/AboutCard";
import { ImageCard } from "./HomeCards/ImageCard/ImageCard";
import "./HomeS.scss";

export const Home = () => {
    return (
        <div className="Home">
            <div className="Home-Cards">
                <AboutCard />
                <ImageCard />
            </div>
        </div>
    );
};
