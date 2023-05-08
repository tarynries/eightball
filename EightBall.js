import React, { useState } from "react";
import defaultAnswers from "./answers.json";
import { choice } from "./random";

function Eightball({ answers = defaultAnswers }) {
    const [answer, setAnswer] = useState({
        msg: "Think of a question",
        color: "black"
    });

    function handleClick(evt) {
        setAnswer(choice(answers))
    }

    return (
        <div className="Eightball"
            onClick={handleClick}
            style={{ backgroundcolor: answer.color }}>
            <b>{answer.msg}</b>
        </div >
    )
}




export default Eightball;