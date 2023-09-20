import s from "./result.module.scss";
import Button from "@/components/button";
import ICONS from "@/assets/images/Icons";

const Result = () => {
    return (
        <div className={s["layout-mask"]}>
            <div className={s["result"]}>
                <p className={s["result__announcement"]}>You won</p>
                <div className={s["result__winner"]}>
                    <ICONS.X />
                    Takes the round
                </div>
                <div className={s["result__action"]}>
                    <Button>Quit</Button>
                    <Button>Next Round</Button>
                </div>
            </div>
        </div>
    )
}

export default Result;