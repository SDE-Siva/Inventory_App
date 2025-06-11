import React, { useRef } from "react";
import "../Billing/CenterScrollBar.css";
import { itemsData } from "../../utilities/itemsData";
import { upIcon, downIcon } from "../../assets/images";

export const CenterScrollBar = () => {
  const itemData = itemsData;
  const scrollRef = useRef(null);

  const scrollUp = () => {
    scrollRef.current.scrollBy({
      top: -60,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    scrollRef.current.scrollBy({
      top: 60,
      behavior: "smooth",
    });
  };

  return (
    <div className="menu-wrapper">
      <div className="scroll-button up" onClick={scrollUp}>
        <img src={upIcon} alt="" />
      </div>
      <div className="scroll-container" ref={scrollRef}>
        {itemData.map((item) => (
          <div className="item-box">{item.itemName}</div>
        ))}
      </div>
      <div className="scroll-button down" onClick={scrollDown}>
        <img src={downIcon} alt="" />
      </div>
    </div>
  );
};

export default CenterScrollBar;
