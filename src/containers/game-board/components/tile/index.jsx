import ICONS from "@/assets/images/Icons";
import styles from "./tile.module.scss";
import IconXHover from "@/assets/images/icon-x-outline.svg";
import IconOHover from "@/assets/images/icon-o-outline.svg";
import { useState } from 'react';

const Tile = ({ value, handleClickTile, isXNext }) => {
  const [hover, setHover] = useState(false);

  const handleMouseHover = (isHover) => {
    if(value) {
      return;
    }
    setHover(isHover);
  }
  
  const renderHover = (isXNext) => {
    if(isXNext) {
      return <img src={IconXHover} alt="x-outline" />
    } else if (!isXNext) {
      return <img src={IconOHover} alt="o-outline" />
    } else {
      return null;
    }
  }

  return (
    <button 
      className={styles["tile"]} 
      onClick={()=>{setHover(false); handleClickTile()}} 
      onMouseEnter={() => handleMouseHover(true)} 
      onMouseLeave={() => handleMouseHover(false)}
    >
      {value === "X" ? <ICONS.X style={{width: "64.67px"}} fill={"#31C3BD"} /> : value === "O" ? <ICONS.O style={{width: "64.67px"}} fill="#F2B137"/> : value}
      {hover ? 
        renderHover(isXNext) : null
      }
    </button>
  );
};

export default Tile;
