import React from "react";
import { Link } from "react-router-dom";

const FinishQuizButton = ({ points, currentQuestion, isSubmitted }) => {
    const displayButton = () => {
        return currentQuestion === 10 ? "" : "none";
    };

    return (
        <React.Fragment>
            {isSubmitted ? (
                <button
                    style={{ display: displayButton() }}
                    className="btn"
                    points={points}
                >
                    <Link
                        to={{
                            pathname: "/statistics",
                            state: {
                                points: points
                            }
                        }}
                    >
                        Finish Quiz
                    </Link>
                </button>
            ) : (
                <button
                    disabled
                    style={{ display: displayButton() }}
                    className="btn btn-disabled"
                    points={points}
                >
                    Finish Quiz
                </button>
            )}
        </React.Fragment>
    );
};

export default FinishQuizButton;
