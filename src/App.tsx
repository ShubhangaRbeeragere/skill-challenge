import React from "react";
import Editor from "./components/editor/editor";
import Navigation from "./components/navigation/navigation";
import Configuration from "./components/editor_configuration/configuration";
import Result from "./components/result/result";
import Challenge from "./components/challenge/challenge";

function App() {
    return (
        <div className="app">
            <Navigation />
            <Challenge />
            <Configuration />
            <Editor />
            <Result />
        </div>
    );
}

export default App;
