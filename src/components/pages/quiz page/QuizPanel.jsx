import React, { Component } from "react";
import QuestionPanel from "./QuestionPanel";
import AnswerPanel from "./AnswerPanel";
import NextQuestionButton from "../../NextQuestionButton";
import LoaderIcon from "../../LoaderIcon";
import FinishQuizButton from "../../FinishQuizButton";

class QuizPanel extends Component {
    state = {
        test: true,
        loaderIcon: true,
        submitAnswer: false,
        questions: [
            "asdas",
            "asdasd",
            "s??",
            "asdasd",
            "s??",
            "asdasd",
            "s??",
            "asdasd",
            "s??",
            "XDD"
        ],
        answers: [[], [], [], [], [], [], [], [], [], []],
        currentQuestion: 1,
        points: 0,
        actualQuestion: "",
        actuanAnswers: []
    };

    componentDidMount = () => {
        fetch(
            "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple"
        )
            .then(res => {
                return res.json();
            })
            .then(res => {
                const formattedQuestion = res.results.map(loadedQuestion => ({
                    quest: this.htmlDecode(loadedQuestion.question)
                }));

                const formattedAnswers = res.results.map(answer => {
                    const answerChoices = [...answer.incorrect_answers];
                    answerChoices.splice(
                        Math.floor(Math.random() * 4),
                        0,
                        answer.correct_answer
                    );
                    const isAnswerCorrect = index => {
                        return answerChoices[index] === answer.correct_answer;
                    };
                    const answers = answerChoices.map((a, index) => ({
                        id: index + 1,
                        text: this.htmlDecode(answerChoices[index]),
                        isCorrect: isAnswerCorrect(index),
                        isMarked: false,
                        submitedAnswerClass: ""
                    }));
                    console.log(answer.correct_answer);
                    return answers;
                });

                this.setState({
                    questions: [...formattedQuestion],
                    answers: [...formattedAnswers]
                });
                this.setState({
                    actualQuestion: this.state.questions[0],
                    actuanAnswers: this.state.answers[0],
                    loaderIcon: false
                });
            });
    };
    htmlDecode = input => {
        const doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    };
    selectAnswer = e => {
        const clickedAnswer = parseInt(e.target.id);
        this.setState(
            this.state.actuanAnswers.map(answer => {
                return clickedAnswer === answer.id
                    ? (answer.isMarked = true)
                    : (answer.isMarked = false);
            })
        );
        this.submitAnswer();
    };

    submitAnswer = () => {
        if (this.state.submitAnswer) {
            return;
        }
        this.setState(
            this.state.actuanAnswers.map(answer => {
                if (answer.isMarked && !answer.isCorrect) {
                    return (answer.submitedAnswerClass = " wrong");
                } else if (answer.isMarked && answer.isCorrect) {
                    return (
                        (answer.submitedAnswerClass = " correct"),
                        this.setState({ points: this.state.points + 1 })
                    );
                } else if (answer.isCorrect) {
                    return (answer.submitedAnswerClass = " correct");
                } else {
                    return (answer.submitedAnswerClass = "");
                }
            })
        );
        this.setState({ submitAnswer: true });
    };

    showSelectAnswer = () => {
        console.log(`please select answer`);
    };

    getNextQuestion = () => {
        if (!this.state.submitAnswer) {
            this.showSelectAnswer();
            return;
        }

        if (this.state.currentQuestion < this.state.questions.length) {
            const number = this.state.currentQuestion;
            this.setState({
                actualQuestion: this.state.questions[number],
                actuanAnswers: this.state.answers[number],
                currentQuestion: this.state.currentQuestion + 1
            });
            this.setState({ submitAnswer: false });
        }
    };

    render() {
        return (
            <div className="container">
                <div className="main-panel quiz-panel">
                    <LoaderIcon loaderIcon={this.state.loaderIcon} />
                    <QuestionPanel
                        question={this.state.actualQuestion}
                        currentQuestion={this.state.currentQuestion}
                    />
                    <AnswerPanel
                        isSubmitted={this.state.submitAnswer}
                        selectAnswer={this.selectAnswer}
                        answers={this.state.actuanAnswers}
                    />
                    <div>
                        <NextQuestionButton
                            getNextQuestion={this.getNextQuestion}
                            currentQuestion={this.state.currentQuestion}
                        />
                        <FinishQuizButton
                            points={this.state.points}
                            currentQuestion={this.state.currentQuestion}
                            isSubmitted={this.state.submitAnswer}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizPanel;
