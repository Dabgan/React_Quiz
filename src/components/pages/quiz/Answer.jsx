import React from "react";

function Answer(props) {
    const selectAnswer = () => {
        console.log("answer selected");
    };

    return (
        <div className="answer" onClick={selectAnswer}>
            <h2>{props.answerText}</h2>
        </div>
    );
}

export default Answer;
