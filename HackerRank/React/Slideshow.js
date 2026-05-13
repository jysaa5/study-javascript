import { useState } from "react";

function Slides({ slides }) {
  const [slidesIndex, setSlidesIndex] = useState(0);

  const isFirstSlide = slidesIndex === 0;
  const isLastSlide = slidesIndex === slides.length - 1;

  const handleRestart = () => {
    setSlidesIndex(0);
  };

  const handlePrev = () => {
    if (slidesIndex > 0) {
      setSlidesIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (slidesIndex < slides.length - 1) {
      setSlidesIndex((prev) => prev + 1);
    }
  };

  if (!slides.length) {
    return null;
  }

  const currentSlide = slides[slidesIndex];

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" type="button" disabled={isFirstSlide} onClick={handleRestart}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" type="button" disabled={isFirstSlide} onClick={handlePrev}>
          Prev
        </button>
        <button data-testid="button-next" className="small" type="button" disabled={isLastSlide} onClick={handleNext}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{currentSlide.title}</h1>
        <p data-testid="text">{currentSlide.text}</p>
      </div>
    </div>
  );
}

export default Slides;
