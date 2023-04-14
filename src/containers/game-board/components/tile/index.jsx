import styles from "./tile.module.scss";

const Tile = (props) => {
  const { isVictory = false, selected = {} } = props;
  return (
    <div className={styles["tile"]}>
    </div>
  )
}

export default Tile;