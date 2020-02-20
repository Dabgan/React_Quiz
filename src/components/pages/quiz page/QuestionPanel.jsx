import React from "react";
import FiftyFiftyButton from "../../FiftyFiftyButton";
import DeleteOneButton from "../../DeleteOneButton";

function QuestionPanel({
    question,
    currentQuestion,
    isAnswerChosen,
    isAvailableFiftyFifty,
    isAvailableDeleteOne,
    fiftyFifty,
    deleteOne
}) {
    const isAnswerSubmitted = isAnswerChosen ? "warning error" : "warning";
    return (
        <div className="question-panel">
            <div className="quiz-information">
                <FiftyFiftyButton
                    fiftyFifty={fiftyFifty}
                    isAvailable={isAvailableFiftyFifty}
                />

                <span className=" question-counter">
                    <span>{currentQuestion}/10</span>
                </span>

                <DeleteOneButton
                    deleteOne={deleteOne}
                    isAvailable={isAvailableDeleteOne}
                />
            </div>
            <div className="question-container">
                <h1 className="question-heading">{question.quest}</h1>
            </div>
            <p className={isAnswerSubmitted}>Please select an answer!</p>
        </div>
    );
}

export default QuestionPanel;
