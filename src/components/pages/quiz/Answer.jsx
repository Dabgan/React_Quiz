import React, { Component } from "react";

class Answer extends Component {
    render() {
        const { selectAnswer, answerText, id, answerClass } = this.props;

        const answerClassName = answerClass ? "answer marked" : "answer";

        return (
            <div
                className={answerClassName + " h1"}
                onClick={selectAnswer}
                id={id}
            >
                {answerText}
            </div>
        );
    }
}

export default Answer;
