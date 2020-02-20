import React, { Component } from "react";
import QuestionPanel from "./QuestionPanel";
import AnswerPanel from "./AnswerPanel";
import NextQuestionButton from "../../NextQuestionButton";
import LoaderIcon from "../../LoaderIcon";
import FinishQuizButton from "../../FinishQuizButton";

class QuizPanel extends Component {
    state = {
        apiURL: this.props.location.state.apiURL,
        // questionCategory: this.props.location.state.category,
        questions: [],
        answers: [],
        actualQuestion: "",
        actualAnswers: [],
        isAnswerChosen: false,
        submitAnswer: false,
        deleteOneHint: true,
        fiftyFiftyHint: true,
        currentQuestion: 1,
        points: 0,
        loaderIcon: true
    };

    componentDidMount = () => {
        const { apiURL } = this.state;

        fetch(apiURL)
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
                    const answers = answerChoices.map((answer, index) => ({
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

    selectAnswer = event => {
        const { actualAnswers } = this.state;
        const clickedAnswer = parseInt(event.target.id);

        this.setState(
            actualAnswers.map(answer => {
                if (clickedAnswer === answer.id) {
                    return (answer.isMarked = true);
                } else return answer;
            })
        );
        this.submitAnswer();
    };

    submitAnswer = () => {
        const { submitAnswer, actualAnswers, points } = this.state;

        if (submitAnswer) {
            return;
        }
        this.setState(
            actualAnswers.map(answer => {
                const { isMarked, isCorrect } = answer;
                if (isMarked && !isCorrect) {
                    return (answer.submitedAnswerClass = " wrong");
                } else if (isMarked && isCorrect) {
                    return (
                        (answer.submitedAnswerClass = " correct"),
                        this.setState({ points: points + 1 })
                    );
                } else if (isCorrect) {
                    return (answer.submitedAnswerClass = " correct");
                } else {
                    return (answer.submitedAnswerClass = " ");
                }
            })
        );
        this.setState({ isAnswerChosen: false, submitAnswer: true });
    };

    showWarningSelectAnswer = () => {
        this.setState({
            isAnswerChosen: true
        });
    };

    getNextQuestion = () => {
        const {
            submitAnswer,
            currentQuestion,
            questions,
            answers
        } = this.state;

        if (!submitAnswer) {
            this.showWarningSelectAnswer();
            return;
        }
        if (currentQuestion < questions.length) {
            const number = currentQuestion;
            this.setState({
                actualQuestion: questions[number],
                actualAnswers: answers[number],
                currentQuestion: currentQuestion + 1
            });
            this.setState({ submitAnswer: false });
        }
    };

    getRandomNumber = x => {
        const random = Math.floor(Math.random() * x);
        return random;
    };

    deleteAnswer = hint => {
        const { actualAnswers } = this.state;

        if (hint) {
            const arrayFiltered = actualAnswers
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
        }
    };

    deleteOneAnswer = hint => {
        this.deleteAnswer(hint);
        this.setState({
            deleteOneHint: false
        });
    };

    deleteTwoAnswers = hint => {
        this.deleteAnswer(hint);
        this.deleteAnswer(hint);
        this.setState({
            fiftyFiftyHint: false
        });
    };

    render() {
        const {
            loaderIcon,
            actualQuestion,
            currentQuestion,
            points,
            isAnswerChosen,
            submitAnswer,
            actualAnswers,
            fiftyFiftyHint,
            deleteOneHint,
            questions
        } = this.state;

        const {
            selectAnswer,
            deleteOneAnswer,
            deleteTwoAnswers,
            getNextQuestion
        } = this;

        return (
            <div className="container">
                <div className="main-panel quiz-panel">
                    <LoaderIcon loaderIcon={loaderIcon} />
                    <QuestionPanel
                        question={actualQuestion}
                        currentQuestion={currentQuestion}
                        isAnswerChosen={isAnswerChosen}
                        isAvailableDeleteOne={deleteOneHint}
                        isAvailableFiftyFifty={fiftyFiftyHint}
                        deleteOne={deleteOneAnswer}
                        fiftyFifty={deleteTwoAnswers}
                        loaderIcon={loaderIcon}
                    />
                    <AnswerPanel
                        isSubmitted={submitAnswer}
                        selectAnswer={selectAnswer}
                        answers={actualAnswers}
                    />

                    <NextQuestionButton
                        getNextQuestion={getNextQuestion}
                        currentQuestion={currentQuestion}
                        quizLength={questions.length}
                        loaderIcon={loaderIcon}
                    />
                    <FinishQuizButton
                        points={points}
                        currentQuestion={currentQuestion}
                        isSubmitted={submitAnswer}
                        quizLength={questions.length}
                    />
                </div>
            </div>
        );
    }
}

export default QuizPanel;
