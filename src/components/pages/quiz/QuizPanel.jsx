import React, { Component } from "react";
import QuestionPanel from "./QuestionPanel";
import AnswerPanel from "./AnswerPanel";
import SubmitButton from "../../SubmitButton";
import NextQuestionButton from "../../NextQuestionButton";

class QuizPanel extends Component {
    state = {
        submitAnswer: false,
        answers: [
            {
                id: 1,
                text: "answer1",
                isMarked: false,
                isCorrect: false,
                submitedAnswerClass: ""
            },
            {
                id: 2,
                text: "answer2",
                isMarked: false,
                isCorrect: false,
                submitedAnswerClass: ""
            },
            {
                id: 3,
                text: "answer3",
                isMarked: false,
                isCorrect: false,
                submitedAnswerClass: ""
            },
            {
                id: 4,
                text: "answer4",
                isMarked: false,
                isCorrect: true,
                submitedAnswerClass: ""
            }
        ]
    };

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
        if (this.state.submitAnswer) {
            return;
        }
        this.setState(
            this.state.answers.map(answer => {
                if (answer.isMarked && !answer.isCorrect) {
                    return (answer.submitedAnswerClass = " wrong");
                } else if (answer.isCorrect) {
                    return (answer.submitedAnswerClass = " correct");
                } else {
                    return (answer.submitedAnswerClass = "");
                }
            })
        );
        this.setState({ submitAnswer: true });
    };

    getNextQuestion = () => {
        if (!this.state.submitAnswer) {
            return;
        }
        console.log(`get next question`);
    };

    render() {
        return (
            <div className="container">
                <div className="main-panel quiz-panel">
                    <QuestionPanel />
                    <AnswerPanel
                        isSubmitted={this.state.submitAnswer}
                        selectAnswer={this.selectAnswer}
                        answers={this.state.answers}
                    />
                    <div>
                        <SubmitButton onSubmit={this.submitAnswer} />
                        <NextQuestionButton
                            getNextQuestion={this.getNextQuestion}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizPanel;
