import React from "react";

function NextQuestionButton(props) {
    const { getNextQuestion, currentQuestion } = props;

    const displayButton = () => {
        return currentQuestion === 10 ? "none" : "";
    };
    return (
        <div>
            <button
                style={{ display: displayButton() }}
                className="btn btn-next-question"
                onClick={getNextQuestion}
            >
                Next question
            </button>
        </div>
    );
}

export default NextQuestionButton;
