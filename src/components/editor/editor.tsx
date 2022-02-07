import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/keybinding-vim";
export default function Editor() {
    return (
        <AceEditor
            mode="javascript"
            theme="solarized_dark"
            onChange={(value) => {
                console.log(value);
            }}
            name="ace_editor"
            keyboardHandler="vim"
            fontSize={16}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
            }}
        />
    );
}
