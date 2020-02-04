import React, { Component } from "react";
import QuestionPanel from "./QuestionPanel";
import AnswerPanel from "./AnswerPanel";

class QuizPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: [
                { id: 1, text: "answer1", isMarked: false, isCorrect: false },
                { id: 2, text: "answer2", isMarked: false, isCorrect: false },
                { id: 3, text: "answer3", isMarked: false, isCorrect: false },
                { id: 4, text: "answer4", isMarked: false, isCorrect: true }
            ]
        };
    }

    selectAnswer = e => {
        const clickedAnswer = parseInt(e.target.id);
        this.setState(
            this.state.answers.map(answer => {
                return clickedAnswer === answer.id
                    ? (answer.isMarked = true)
                    : (answer.isMarked = false);
            })
        );
    };

    submitAnswer = () => {
        console.log(`submit answer`);

        this.setState(
            this.state.answers.map(answer => {
                // answer.isCorrect ?
            })
        );
    };

    getNextQuestion = () => {
        console.log(`get next question`);
    };

    render() {
        return (
            <div className="container">
                <div className="main-panel quiz-panel">
                    <QuestionPanel />
                    <AnswerPanel
                        selectAnswer={this.selectAnswer}
                        answers={this.state.answers}
                    />
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
