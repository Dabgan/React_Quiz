import React from "react";

function NextQuestionButton(props) {
    const { getNextQuestion, currentQuestion } = props;

    const displayButton = () => {
        return currentQuestion === 10 ? "none" : "";
    };
    return (
        <button
            style={{ display: displayButton() }}
            className="btn"
            onClick={getNextQuestion}
        >
            Next question
        </button>
    );
}

export default NextQuestionButton;
