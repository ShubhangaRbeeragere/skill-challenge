import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-gruvbox";

import "ace-builds/src-noconflict/keybinding-vim";
import "./editor.css";

interface Settings {
    language: string;
    font: string;
    mode: string;
    theme: string;
}
export default function Editor({ settings }: { settings: Settings }) {
    return (
        <AceEditor
            mode={settings.language}
            theme={settings.theme}
            onChange={(value) => {
                console.log(value);
            }}
            name="ace_editor"
            keyboardHandler={settings.mode}
            fontSize={settings.font}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
            }}
        />
    );
}
