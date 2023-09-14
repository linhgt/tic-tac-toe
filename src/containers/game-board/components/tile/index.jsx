import ICONS from "@/assets/images/Icons";
import styles from "./tile.module.scss";
import IconXHover from "@/assets/images/icon-x-outline.svg";
import IconOHover from "@/assets/images/icon-o-outline.svg";
import cx from "classnames";
import { useState } from "react";

const Tile = ({ tileData, handleClickTile, isXNext }) => {
  const [hover, setHover] = useState(false);

  const handleMouseHover = (isHover) => {
    if (tileData) {
      return;
    }
    setHover(isHover);
  };

  const renderHover = (isXNext) => {
    if (isXNext) {
      return <img src={IconXHover} alt="x-outline" />;
    } else if (!isXNext) {
      return <img src={IconOHover} alt="o-outline" />;
    } else {
      return null;
    }
  };

  return (
    <button
      className={cx(styles["tile"], {
        [styles["x_win"]]: tileData && tileData.win && tileData.value === "X",
        [styles["o_win"]]: tileData && tileData.win && tileData.value === "O"
      })}
      onClick={() => {
        setHover(false);
        handleClickTile();
      }}
      onMouseEnter={() => handleMouseHover(true)}
      onMouseLeave={() => handleMouseHover(false)}
    >
      {tileData &&
        (tileData.value === "X" ? (
          <ICONS.X
            style={{
              width: "64.67px",
              ...(tileData &&
                tileData.win && {
                  filter:
                    "brightness(0) saturate(100%) invert(18%) sepia(17%) saturate(1124%) hue-rotate(155deg) brightness(93%) contrast(93%)"
                })
            }}
            fill={"#31C3BD"}
          />
        ) : tileData.value === "O" ? (
          <ICONS.O
            style={{
              width: "64.67px",
              ...(tileData &&
                tileData.win && {
                  filter:
                    "brightness(0) saturate(100%) invert(18%) sepia(17%) saturate(1124%) hue-rotate(155deg) brightness(93%) contrast(93%)"
                })
            }}
            fill="#F2B137"
          />
        ) : (
          tileData.value
        ))}
      {hover ? renderHover(isXNext) : null}
    </button>
  );
};

export default Tile;
