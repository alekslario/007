import React, { useEffect, useRef, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { useStore } from "../utils/store.js";
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function isElementInCenter(element) {
  // Get element dimensions
  const elementRect = element.getBoundingClientRect();

  // Get viewport dimensions
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;

  // Calculate center coordinates of the viewport
  const viewportCenterX = viewportWidth / 2;

  // Check if the element is in the center
  const isInCenter =
    elementRect.left < viewportCenterX && elementRect.right > viewportCenterX;

  return isInCenter;
}

export const List = ({ data = [] }) => {
  const [selected, setSelected] = useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <div className="slider-wrapper">
      <span className="slider-pointer">&#9660;</span>

      <ScrollMenu>
        {data
          .map((el, index) => ({ date: el, id: `${index}${el}` }))
          .map(({ id, date }) => (
            <Card
              itemId={id} // NOTE: itemId is required for track items
              date={date}
              key={id}
              onClick={handleClick(id)}
              selected={isItemSelected(id)}
            />
          ))}
      </ScrollMenu>
    </div>
  );
};

function Card({ onClick, selected, date, itemId }) {
  const [_, dispatch] = useStore();
  const ref = useRef(null);
  const visibility = React.useContext(VisibilityContext);
  const parent = document.getElementsByClassName(
    "react-horizontal-scrolling-menu--scroll-container "
  )[0];

  useEffect(() => {
    if (!parent || !ref.current) return;
    const vis = visibility.isItemVisible(itemId);
    const callback = () => {
      const centered = isElementInCenter(ref.current);
      if (centered) {
        dispatch({ type: "SET_DATE", date });
      }
    };

    if (!visibility) {
      parent.removeEventListener("scroll", callback);
    } else {
      parent.addEventListener("scroll", callback);
    }

    return () => parent.removeEventListener("scroll", callback);
  }, [visibility.isItemVisible(itemId)]);
  const [onlyDate, time] = date.split("T");
  const [year, month, day] = onlyDate.split("-");
  const dayOfWeek = DAYS[new Date(date).getDay()];
  const [hours, minutes] = time.split(":");
  return (
    <div
      ref={ref}
      onClick={() => onClick(visibility)}
      tabIndex={0}
      className="column"
    >
      <>
        <div
          className="slider-days"
          data-day={time === "00:00" ? `${dayOfWeek} ${day}` : ""}
        >
          .
        </div>
        <div
          data-hour={hours % 5 === 0 ? `${hours}:00` : ""}
          className="slider-hours"
        >
          .
        </div>
      </>
    </div>
  );
}
