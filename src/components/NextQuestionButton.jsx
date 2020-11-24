import React from "react";

function NextQuestionButton(props) {
    const { getNextQuestion, currentQuestion, quizLength, loaderIcon } = props;

    const displayButton = () => {
        let display;
        const isVisible =
            currentQuestion === quizLength
                ? "none"
                : loaderIcon
                ? "none"
                : "flex";
        display = isVisible;
        return display;
    };

    return (
        <div>
            <button
                style={{ display: `${displayButton()}` }}
                className="btn btn-next-question"
                onClick={getNextQuestion}
            >
                Next question
            </button>
        </div>
    );
}

export default NextQuestionButton;
