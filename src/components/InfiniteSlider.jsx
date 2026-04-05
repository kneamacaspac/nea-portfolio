import sliderImages from "../data/sliderImages";
import "../styles/slider.css";

function InfiniteSlider() {
  const repeatedImages = [
    ...sliderImages,
    ...sliderImages,
    ...sliderImages,
    ...sliderImages,
  ];

  return (
    <div className="infinite-slider">
      <div className="slider-track">
        {repeatedImages.map((slide, index) => (
          <div className="slide-card" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteSlider;
