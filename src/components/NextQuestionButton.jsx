import React from "react";

function NextQuestionButton(props) {
    const { getNextQuestion } = props;
    return (
        <button className="btn" onClick={getNextQuestion}>
            Next question
        </button>
    );
}

export default NextQuestionButton;
