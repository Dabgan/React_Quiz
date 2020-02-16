import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MainPanel extends Component {
    state = {
        apiURL:
            "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
        category: "General Knowledge"
    };

    changeCategory = e => {
        const optionText = e.target.options[e.target.selectedIndex].text;
        this.setState({
            apiURL: e.target.value,
            category: optionText
        });
    };

    render() {
        return (
            <div className="main-panel">
                <h1 className="big">Quiz App</h1>
                <div className="categories">
                    <label htmlFor="categories" className="categories-label">
                        Category:
                    </label>
                    <select
                        id="categories"
                        className="categories"
                        onChange={this.changeCategory}
                    >
                        <option value="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple">
                            General Knowledge
                        </option>
                        <option value="https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple">
                            Films
                        </option>
                        <option value="https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple">
                            Video Games
                        </option>
                        <option value="https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple">
                            Computers
                        </option>
                        <option value="https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple">
                            Sports
                        </option>
                        <option value="https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple">
                            Animals
                        </option>
                    </select>
                    <Link
                        to={{
                            pathname: "/quiz",
                            state: {
                                apiURL: this.state.apiURL,
                                category: this.state.category
                            }
                        }}
                        className="btn"
                    >
                        Start Quiz
                    </Link>
                </div>
            </div>
        );
    }
}

export default MainPanel;
