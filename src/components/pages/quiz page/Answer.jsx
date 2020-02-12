import React, { Component } from "react";

class Answer extends Component {
    render() {
        const {
            selectAnswer,
            answerText,
            id,
            answerClass,
            answerSubmitedClass
        } = this.props;

        const answerClassName = answerClass ? " marked " : " ";

        return (
            <div
                className={answerClassName + " answer h1" + answerSubmitedClass}
                onClick={selectAnswer}
                id={id}
            >
                {answerText}
            </div>
        );
    }
}

export default Answer;
