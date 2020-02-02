import React, { Component } from "react";
import QuestionPanel from "./QuestionPanel";
import AnswerPanel from "./AnswerPanel";

class QuizPanel extends Component {
    submitAnswer = () => {
        console.log(`submit answer`);
    };

    getNextQuestion = () => {
        console.log(`get next question`);
    };

    render() {
        return (
            <div className="container">
                <div className="main-panel quiz-panel">
                    <QuestionPanel />
                    <AnswerPanel />
                    <div>
                        <button className="btn" onClick={this.submitAnswer}>
                            Submit answer
                        </button>
                        <button className="btn" onClick={this.getNextQuestion}>
                            Next question
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizPanel;
