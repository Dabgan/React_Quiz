import React from "react";
import { Link } from "react-router-dom";

function MainPanel() {
    return (
        <div className="main-panel">
            <h1 className="big">Quiz App</h1>
            <Link to="/quiz" className="btn">
                Start Quiz
            </Link>
        </div>
    );
}

export default MainPanel;
