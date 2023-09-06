import ICONS from "@/assets/images/Icons";
import styles from "./tile.module.scss";

const Tile = ({ value, handleClickTile }) => {
  return (
    <button className={styles["tile"]} onClick={handleClickTile}>
      {value === "X" ? <ICONS.X /> : (value === "O" ? <ICONS.O/> : value)}
    </button>
  )
}

export default Tile;