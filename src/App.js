import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Quiz from "./components/pages/quiz page/QuizPanel";
import Statistics from "./components/pages/statistic page/Statistics";
import MainPanel from "./components/pages/main page/MainPanel";

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    <MainPanel />
                </Route>
                <Route path="/quiz" component={Quiz} />
                <Route path="/statistics" component={Statistics} />
            </Router>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
