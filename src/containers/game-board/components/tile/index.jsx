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
    <button className={styles["tile"]} onClick={()=>{setHover(false); handleClickTile()}} onMouseEnter={() => handleMouseHover(true)} onMouseLeave={() => handleMouseHover(false)}>
      {value === "X" ? <ICONS.X /> : value === "O" ? <ICONS.O /> : value}
      {hover ? 
        renderHover(isXNext) : null
      }
    </button>
  );
};

export default Tile;
