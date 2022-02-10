import React, { useState } from "react";
import Editor from "./components/editor/editor";
import Navigation from "./components/navigation/navigation";
import Configuration from "./components/editor_configuration/configuration";
import Result from "./components/result/result";
import Challenge from "./components/challenge/challenge";

function App() {
    const [editorSettings, setEditorSettings] = useState({
        language: "java",
        font: "16px",
        mode: "normal",
        theme: "terminal",
    });
    return (
        <div className="app">
            <Navigation />
            <Challenge />
            <Configuration
                settings={editorSettings}
                setSettings={setEditorSettings}
            />
            <Editor settings={editorSettings} />
            <Result />
        </div>
    );
}

export default App;
