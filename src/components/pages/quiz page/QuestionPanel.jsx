import React from "react";

function QuestionPanel({ question, currentQuestion, points }) {
    return (
        <div className="question-panel">
            <div className="content">
                <p>
                    Points: <span>{points}</span>
                </p>
                <p>
                    Question: <span>{currentQuestion}/10</span>
                </p>
            </div>
            <div className="counter">
                <h1 className="question-heading">{question.quest}</h1>
            </div>
        </div>
    );
}

export default QuestionPanel;
