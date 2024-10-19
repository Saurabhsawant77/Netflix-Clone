// Slider.js
import React, { useState } from 'react';
import imgHome from '../pages/home/FetchingImages'


const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgHome.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imgHome.length) % imgHome.length);
    };

    return (
        <div className="relative">
            <img src={imgHome[currentIndex].img} alt={`Slide ${currentIndex}`} className="w-full h-auto" />
            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded">
                Prev
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded">
                Next
            </button>
        </div>
    );
};

export default Slider;
