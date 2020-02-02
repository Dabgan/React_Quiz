import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import MainView from "./components/pages/main page/MainView";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Quiz from "./components/pages/quiz/QuizPanel";

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    <MainView />
                </Route>
                <Route path="/quiz" component={Quiz} />
            </Router>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
