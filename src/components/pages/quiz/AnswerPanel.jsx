import React from "react";
import Answer from "./Answer";

function AnswerPanel() {
    const answers = [
        { id: 1, text: "answer1" },
        { id: 2, text: "answer2" },
        { id: 3, text: "answer3" },
        { id: 4, text: "answer4" }
    ];

    const answersList = answers.map(answer => (
        <Answer key={answer.id} answerText={answer.text} />
    ));

    return <div className="answers-panel">{answersList}</div>;
}

export default AnswerPanel;
