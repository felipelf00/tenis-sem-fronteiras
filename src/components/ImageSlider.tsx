import { useState, useEffect } from "react";

interface ImageObject {
  url: string;
  alt: string;
}

interface ImageSliderProps {
  images: ImageObject[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentIndex]);

  return (
    <div className="w-full h-full max-w-5xl m-auto relative">
      <button
        className="absolute h-full top-0 left-0 z-50 text-3xl font-bold text-white hover:bg-black/50 p-4"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <div className="flex items-center overflow-hidden max-w-5xl max-h-[682px] relative z-10">
        {images.map((image) => (
          <img
            className={`object-cover w-full h-full block shrink-0 grow-0 transition-translate duration-300 ease-in-out`}
            src={image.url}
            alt={image.alt}
            key={image.url}
            style={{ translate: `${-100 * currentIndex}%` }}
          />
        ))}
      </div>
      <button
        className="absolute h-full top-0 right-0 z-50 text-3xl font-bold text-white hover:bg-black/50 p-4"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
