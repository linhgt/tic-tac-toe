import React, { useState } from 'react';
import { MARK } from '../../constant.js';
import Switch from './components/switch';
import styles from './mark-choice.module.scss';

const MarkChoice = (props) => {
    const [mark, setMark] = useState(MARK.X);
    const listChoices = [
        {
            name: "cross",
            value: MARK.X
        },
        {
            name: "nought",
            value: MARK.O
        }
    ]
    
    const setChoice = (value) => {
        setMark(value);
    }

    return (
        <div class={styles.wrapper}>
            <Switch listChoices={listChoices} choice={mark} setChoice={setChoice}/>
        </div>
    )
}
