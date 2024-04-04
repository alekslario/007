import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useEmblaCarousel from "embla-carousel-react";
import { selectSlide } from "../utils/store";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const dispatch = useDispatch();
  const {
    current: { name, lat, lon },
    selectedIndex,
    options,
  } = useSelector((state) => {
    return state.location;
  });

  const logSlidesInView = () => {
    if (emblaApi) {
      const slides = emblaApi.slidesInView();

      if (slides.length && slides[0] !== selectedIndex) {
        dispatch(selectSlide(slides[0]));
      }
    }
  };

  useEffect(() => {
    if (emblaApi) emblaApi.on("slidesInView", logSlidesInView);
  }, [emblaApi, logSlidesInView]);
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {[name, ...options.map((e) => e.name)]
            .filter((e) => e)
            .map((name, index) => {
              return (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">{name}</div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
