import React from "react";
import Editor from "./components/editor/editor";
import Navigation from "./components/navigation/navigation";

function App() {
    return (
        <div className="app">
            <Navigation />
            <Editor />
        </div>
    );
}

export default App;
