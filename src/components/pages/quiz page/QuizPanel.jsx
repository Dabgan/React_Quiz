import React, { Component } from "react";
import QuestionPanel from "./QuestionPanel";
import AnswerPanel from "./AnswerPanel";
import NextQuestionButton from "../../NextQuestionButton";
import LoaderIcon from "../../LoaderIcon";
import FinishQuizButton from "../../FinishQuizButton";
import FiftyFiftyButton from "../../FiftyFiftyButton";
import DeleteOneButton from "../../DeleteOneButton";

class QuizPanel extends Component {
    state = {
        apiURL: this.props.location.state.apiURL,
        questionCategory: this.props.location.state.category,
        questions: [],
        answers: [],
        actualQuestion: "",
        actualAnswers: [],
        isAnswerChosen: false,
        submitAnswer: false,
        deleteOne: true,
        fiftyFifty: true,
        currentQuestion: 1,
        points: 0,
        loaderIcon: true
    };

    componentDidMount = () => {
        fetch(this.state.apiURL)
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
                        submitedAnswerClass: "answer-hover"
                    }));
                    return answers;
                });

                this.setState({
                    questions: [...formattedQuestion],
                    answers: [...formattedAnswers]
                });
                this.setState({
                    actualQuestion: this.state.questions[0],
                    actualAnswers: this.state.answers[0],
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
            this.state.actualAnswers.map(answer => {
                if (clickedAnswer === answer.id) {
                    return (answer.isMarked = true);
                } else return answer;
            })
        );
        this.submitAnswer();
    };

    submitAnswer = () => {
        if (this.state.submitAnswer) {
            return;
        }
        this.setState(
            this.state.actualAnswers.map(answer => {
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
                    return (answer.submitedAnswerClass = " ");
                }
            })
        );
        this.setState({ isAnswerChosen: false, submitAnswer: true });
    };

    showSelectAnswer = () => {
        this.setState({
            isAnswerChosen: true
        });
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
                actualAnswers: this.state.answers[number],
                currentQuestion: this.state.currentQuestion + 1
            });
            this.setState({ submitAnswer: false });
        }
    };

    getRandomNumber = x => {
        const random = Math.floor(Math.random() * x);
        return random;
    };

    fiftyFifty = () => {
        if (this.state.fiftyFifty) {
            const newArray = this.state.actualAnswers
                .filter(answer => answer.isCorrect === false)
                .filter(answer => answer.submitedAnswerClass !== "wrong");

            console.table(newArray);
            const randomNumber = this.getRandomNumber(newArray.length);

            const newArrayMapped = newArray.map((answer, index) => {
                if (index === randomNumber) {
                    return (
                        (answer.submitedAnswerClass = "wrong"),
                        (answer.isMarked = true)
                    );
                } else return answer;
            });

            const newArrayMappedFiltered = newArrayMapped
                .filter(answer => answer.isCorrect === false)
                .filter(answer => answer.submitedAnswerClass !== "wrong");

            const randomNumber2 = this.getRandomNumber(
                newArrayMappedFiltered.length
            );

            const finalArray = newArrayMappedFiltered.map((answer, index) => {
                if (index === randomNumber2) {
                    return (
                        (answer.submitedAnswerClass = "wrong"),
                        (answer.isMarked = true)
                    );
                } else return answer;
            });

            this.setState(finalArray);

            this.setState({
                fiftyFifty: false
            });
        }
    };

    deleteOneAnswer = () => {
        if (this.state.deleteOne) {
            const arrayFiltered = this.state.actualAnswers
                .filter(answer => answer.isCorrect === false)
                .filter(answer => answer.submitedAnswerClass !== "wrong");

            const randomNumber = this.getRandomNumber(arrayFiltered.length);

            const finalArray = arrayFiltered.map((answer, index) => {
                if (index === randomNumber) {
                    return (
                        (answer.submitedAnswerClass = "wrong"),
                        (answer.isMarked = true)
                    );
                } else return answer;
            });

            this.setState(finalArray);
            this.setState({
                deleteOne: false
            });
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
                        points={this.state.points}
                        isAnswerChosen={this.state.isAnswerChosen}
                        questionCategory={this.state.questionCategory}
                    />
                    <AnswerPanel
                        isSubmitted={this.state.submitAnswer}
                        selectAnswer={this.selectAnswer}
                        answers={this.state.actualAnswers}
                    />
                    <div className="control-buttons">
                        <FiftyFiftyButton
                            fiftyFifty={this.fiftyFifty}
                            isAvailable={this.state.fiftyFifty}
                        />
                        <NextQuestionButton
                            getNextQuestion={this.getNextQuestion}
                            currentQuestion={this.state.currentQuestion}
                        />
                        <FinishQuizButton
                            points={this.state.points}
                            currentQuestion={this.state.currentQuestion}
                            isSubmitted={this.state.submitAnswer}
                        />
                        <DeleteOneButton
                            deleteOne={this.deleteOneAnswer}
                            isAvailable={this.state.deleteOne}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizPanel;
