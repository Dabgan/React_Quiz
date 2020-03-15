import React from "react";
import HintButton from "../../components/HintButton";

function QuestionPanel({
    question,
    currentQuestion,
    isAnswerChosen,
    isAvailableFiftyFifty,
    isAvailableDeleteOne,
    fiftyFifty,
    deleteOne,
    loaderIcon
}) {
    const isIconVisible = loaderIcon ? "none" : "flex";
    const isAnswerSubmitted = isAnswerChosen ? "warning error" : "warning";
    return (
        <div className="question-panel">
            <div className="quiz-information">
                <HintButton
                    loaderIcon={loaderIcon}
                    deleteMethod={fiftyFifty}
                    isAvailable={isAvailableFiftyFifty}
                    btnText="50:50"
                />

                <span
                    style={{ display: `${isIconVisible}` }}
                    className=" question-counter"
                >
                    <span>{currentQuestion}/10</span>
                </span>

                <HintButton
                    loaderIcon={loaderIcon}
                    deleteMethod={deleteOne}
                    isAvailable={isAvailableDeleteOne}
                    btnText="Delete One"
                />
            </div>
            <div
                style={{ display: `${isIconVisible}` }}
                className="question-container"
            >
                <h1 className="question-heading">{question.quest}</h1>
            </div>
            <p className={isAnswerSubmitted}>Please select an answer!</p>
        </div>
    );
}

export default QuestionPanel;
