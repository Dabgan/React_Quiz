import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MainPanel extends Component {
    state = {
        apiURL:
            "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
        category: "General Knowledge"
    };

    changeCategory = event => {
        const optionText =
            event.target.options[event.target.selectedIndex].text;
        this.setState({
            apiURL: event.target.value,
            category: optionText
        });
    };

    getCategoryURL = number => {
        return `https://opentdb.com/api.php?amount=10&category=${number}&difficulty=easy&type=multiple`;
    };

    render() {
        const { apiURL, category } = this.state;
        return (
            <div className="container">
                <div className="main-panel">
                    <h1 className="big">Quiz App</h1>
                    <div className="categories">
                        <label
                            htmlFor="categories"
                            className="categories-label"
                        >
                            Category:
                        </label>
                        <select
                            id="categories"
                            className="categories"
                            onChange={this.changeCategory}
                        >
                            <option value={this.getCategoryURL(9)}>
                                General Knowledge
                            </option>
                            <option value={this.getCategoryURL(11)}>
                                Films
                            </option>
                            <option value={this.getCategoryURL(15)}>
                                Video Games
                            </option>
                            <option value={this.getCategoryURL(18)}>
                                Computers
                            </option>
                            <option value={this.getCategoryURL(21)}>
                                Sports
                            </option>
                            <option value={this.getCategoryURL(27)}>
                                Animals
                            </option>
                        </select>
                        <Link
                            to={{
                                pathname: "/quiz",
                                state: {
                                    apiURL: apiURL,
                                    category: category
                                }
                            }}
                            className="btn btn-start"
                        >
                            Start Quiz
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPanel;
