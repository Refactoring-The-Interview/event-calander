import { Carousel } from "react-bootstrap";

interface Props {
    images: string[];
}

export const ImageCarousel = ({ images }: Props) => {
    return (
        <Carousel fade>
            {images.map((img, index) => {
                return (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt={`sidle ${index}`}
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};
