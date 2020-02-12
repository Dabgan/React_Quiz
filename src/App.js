import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import MainView from "./components/pages/main page/MainView";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Quiz from "./components/pages/quiz page/QuizPanel";
import Statistics from "./components/pages/statistic page/Statistics";

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    <MainView />
                </Route>
                <Route path="/quiz" component={Quiz} />
                <Route path="/statistics" component={Statistics} />
            </Router>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
