import React from "react";

function QuestionPanel({ question, currentQuestion }) {
    return (
        <div className="question-panel">
            <div className="content">
                <div className="counter">
                    Question: <span>{currentQuestion}/10</span>
                </div>
            </div>
            <h1 className="question-heading">{question.quest}</h1>
        </div>
    );
}

export default QuestionPanel;
