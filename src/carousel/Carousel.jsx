/** React imports */
import { useEffect, useRef, useState } from "react";

/**
 * Carousel of elements which can be controlled with forward and backward 
 * buttons. Each immediate child within Carousel is a slide.
 * @param {Number} currentSlide Index of the current slide in the carousel
 * @param {Function} setCurrentSlide Function to change the value of currentSlide
 */
export default function Carousel ({ currentSlide, setCurrentSlide, children }) {
    // State variables
    const [height, setHeight] = useState(0); // Carousel height based on the current slide

    return (
        <div>
            <CarouselControls currentSlide={ currentSlide } setCurrentSlide={ setCurrentSlide } max={ !children || children.length-1 } />
            
            <div className="relative overflow-hidden" style={{height: `${height}px`}}>
                {children && children.map((child, i) => (
                    <CarouselSlide position={ i - currentSlide } setHeight={ setHeight } key={ i }>
                        {child}
                    </CarouselSlide>
                ))}
            </div>
        </div>
    );
};

/**
 * Buttons to control the carousel slide by adjusting the value of currentSlide.
 * @param {Number} currentSlide Current slide index
 * @param {Function} setCurrentSlide Sets a new value for currentSlide
 * @param {Number} max Maximum value for currentSlide
 */
function CarouselControls ({ currentSlide, setCurrentSlide, max }) {
    // Move to the previous slide
    function prevSlide () {
        setCurrentSlide(currentSlide - 1);
    }

    // Move to the next slide
    function nextSlide () {
        setCurrentSlide(currentSlide + 1);
    }

    return (
        <div className="flex justify-between py-4 border-b border-current">
            <button className="flex items-center px-3 py-1 rounded-3xl bg-blue-500 text-white disabled:opacity-0" disabled={currentSlide === 0} onClick={prevSlide}>
                &larr; back
            </button>

            <button className="flex items-center px-3 py-1 rounded-3xl bg-blue-500 text-white disabled:opacity-0" disabled={currentSlide >= max} onClick={nextSlide}>
                next &rarr;
            </button>
        </div>
    );
}

/**
 * Slide within the carousel. Only rendered if it is the current, previous, or next slide.
 * @param {Number} position Number representing the distance from current, where <0 
 *                          is to the left, >0 is to the right, and 0 is the current 
 *                          slide
 */
function CarouselSlide ({ position, setHeight, children }) {
    // State variables
    const ref = useRef(null); // Slide element reference
    
    // Function to set the new size
    const handleResize = () => { setHeight(ref.current.offsetHeight) };

    // Set the height of the slide
    useEffect(() => {
        if (position === 0 && ref.current) {
            // Set the size once to start
            handleResize();
        
            // Listen for resizes to adjust the height
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [position]);

    // Get the boolean for whether to render this slide and the css translation based on its position
    const translation = (position === 0) ? "" : (position < 0) ? "-translate-x-full" : "translate-x-full";

    return ( 
        <div className={`absolute w-full h-max transition-transform ease duration-[400ms] ${translation}`} ref={ ref }>
            {children}
        </div>
    );
}