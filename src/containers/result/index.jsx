import s from "./result.module.scss";
import Button from "@/components/button";
import ICONS from "@/assets/images/Icons";

const Result = () => {
    return (
        <div className={s["layout-mask"]}>
            <div className={s["result"]}>
                <p className={s["result__announcement"]}>YOU WON!</p>
                <div className={s["result__winner"]}>
                    <ICONS.X style={{ width: "64.67px"}} fill={"#31C3BD"} />
                    <span className={s["who-won"]}>Takes the round</span>
                </div>
                <div className={s["result__action"]}>
                    <Button className={s["quit"]}>Quit</Button>
                    <Button className={s["next-round"]}>Next Round</Button>
                </div>
            </div>
        </div>
    )
}

export default Result;