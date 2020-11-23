import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Quiz from "./pages/quiz/QuizPanel";
import Statistics from "./pages/statistics/Statistics";
import MainPanel from "./pages/main/MainPanel";

class App extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
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
