import React, { Component } from "react";
import Answer from "./Answer";

class AnswerPanel extends Component {
    render() {
        const { answers } = this.props;

        const answersList = answers.map(answer => (
            <Answer
                key={answer.id}
                id={answer.id}
                answerText={answer.text}
                selectAnswer={this.props.selectAnswer}
                answerClass={answer.isMarked}
            />
        ));

        return <div className="answers-panel">{answersList}</div>;
    }
}

export default AnswerPanel;
