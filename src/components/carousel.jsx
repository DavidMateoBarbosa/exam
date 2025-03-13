import { useState } from 'react';
import {Carousel as ReactCarousel} from 'react-bootstrap';

export default function Carousel({data}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <ReactCarousel activeIndex={index} onSelect={handleSelect}>
            {data.slice(3, 10).map((item, idx) => (
                <ReactCarousel.Item key={idx}>
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt={`Slide ${idx + 1}`}
                    />
                </ReactCarousel.Item>
            ))}
        </ReactCarousel>
    );
}
