import React, { Component } from "react";

class Answer extends Component {
    render() {
        const {
            selectAnswer,
            answerText,
            id,
            answerSubmitedClass
        } = this.props;

        return (
            <div
                className={"answer h1 " + answerSubmitedClass}
                onClick={selectAnswer}
                id={id}
            >
                {answerText}
            </div>
        );
    }
}

export default Answer;
