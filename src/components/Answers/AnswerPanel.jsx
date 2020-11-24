import React, { Component } from "react";
import Answer from "./Answer";

class AnswerPanel extends Component {
    render() {
        const {
            answers,
            isSubmitted,
            selectAnswer,
            isAnswerChosen,
        } = this.props;
        const onSelect = isSubmitted ? null : selectAnswer;

        const answersList = answers.map((answer) => (
            <Answer
                key={answer.id}
                id={answer.id}
                answerText={answer.text}
                selectAnswer={onSelect}
                answerClass={isAnswerChosen}
                answerSubmitedClass={answer.submitedAnswerClass}
            />
        ));

        return <div className="answers-panel">{answersList}</div>;
    }
}

export default AnswerPanel;
