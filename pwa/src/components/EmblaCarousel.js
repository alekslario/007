import React, { useCallback, useEffect } from "react";
import ActionButton from "./ActionButton";
import { IconChevronsRight, IconChevronsLeft } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import useEmblaCarousel from "embla-carousel-react";
import { selectSlide } from "../utils/store";
import { darkTheme, lightTheme } from "../global";
import styled from "@emotion/styled";

const Icon = styled(ActionButton)`
  position: static;
  /* width: 30px;
  height: 30px; */
  box-shadow: none;
`;

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const dispatch = useDispatch();
  const [
    {
      current: { name, lat, lon },
      selectedIndex,
      options,
    },
    preferences,
  ] = useSelector((state) => {
    return [state.location, state.preferences];
  });

  const theme = preferences.theme.selected === "dark" ? darkTheme : lightTheme;

  const logSlidesInView = () => {
    if (emblaApi) {
      const slides = emblaApi.slidesInView();

      if (slides.length && slides[0] !== selectedIndex) {
        dispatch(selectSlide(slides[0]));
      }
    }
  };

  useEffect(() => {
    let handle = null;
    if (emblaApi) {
      setTimeout(() => {
        emblaApi.scrollTo(options.length);
      }, 300);
    }
    return () => {
      if (handle) {
        clearTimeout(handle);
      }
    };
  }, [options.length]);

  useEffect(() => {
    if (emblaApi) emblaApi.on("slidesInView", logSlidesInView);
  }, [emblaApi, logSlidesInView]);

  const handlePrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };
  const handleNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };
  return (
    <>
      {options.length > 0 && (
        <Icon
          stroke={theme.active}
          theme={theme}
          onClick={handlePrev}
          customCss={`
        box-shadow: none;
      `}
        >
          <IconChevronsLeft />
        </Icon>
      )}

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
      {options.length > 0 && (
        <Icon stroke={theme.active} theme={theme} onClick={handleNext}>
          <IconChevronsRight stroke={theme.active} />
        </Icon>
      )}
    </>
  );
};

export default EmblaCarousel;
