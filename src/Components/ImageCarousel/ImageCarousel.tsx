import { Carousel, Image } from "react-bootstrap";

interface Props {
    images: string[];
}

export const ImageCarousel = ({ images }: Props) => {
    return (
        <Carousel fade>
            {images.map((img, index) => {
                return (
                    <Carousel.Item interval={7000}>
                        <Image fluid src={img} alt={`sidle ${index}`} />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};
