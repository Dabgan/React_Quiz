import React from "react";
import { Link } from "react-router-dom";

const FinishQuizButton = ({
    points,
    currentQuestion,
    isSubmitted,
    quizLength
}) => {
    const displayButton = () => {
        return currentQuestion === quizLength ? "" : "none";
    };

    return (
        <React.Fragment>
            {isSubmitted ? (
                <Link
                    to={{
                        pathname: "/statistics",
                        state: {
                            points: points
                        }
                    }}
                >
                    <button
                        style={{ display: displayButton() }}
                        className="btn btn-finish-quiz"
                        points={points}
                    >
                        Finish Quiz
                    </button>
                </Link>
            ) : (
                <button
                    disabled
                    style={{ display: displayButton() }}
                    className="btn btn-finish-quiz btn-disabled"
                    points={points}
                >
                    Finish Quiz
                </button>
            )}
        </React.Fragment>
    );
};

export default FinishQuizButton;
