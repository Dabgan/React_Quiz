import React from "react";

function QuestionPanel({
    question,
    currentQuestion,
    points,
    isAnswerChosen,
    questionCategory
}) {
    const isAnswerSubmitted = isAnswerChosen ? "warning error" : "warning";
    return (
        <div className="question-panel">
            <div className="content">
                <p>
                    Points: <span>{points}</span>
                </p>
                <p className="question-category">
                    Category:{" "}
                    <span style={{ fontWeight: "600" }}>
                        {questionCategory}
                    </span>
                </p>
                <p>
                    Question: <span>{currentQuestion}/10</span>
                </p>
            </div>
            <div className="counter">
                <h1 className="question-heading">{question.quest}</h1>
            </div>
            <p className={isAnswerSubmitted}>Please select an answer!</p>
        </div>
    );
}

export default QuestionPanel;
