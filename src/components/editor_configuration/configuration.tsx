import { useState } from "react";
import Select from "react-select";
import "./configuration.css";

function Configuration() {
    const [language, setLanguage] = useState("java");
    const [font, setFont] = useState("10");
    const [mode, setMode] = useState("vim");
    const [theme, setTheme] = useState("solarized_dark");
    return (
        <div className="configuration box">
            <div className="language setting">
                <p>language:</p>
                <div className="language__dropdown dropdown">
                    <select
                        value={language}
                        onChange={(e: any) => {
                            setLanguage(e.target.value);
                        }}
                    >
                        <option value="c_cpp">C/C++</option>
                        <option value="javascript">Javascript</option>
                        <option selected value="java">
                            Java
                        </option>
                        <option value="python">Python</option>
                    </select>
                </div>
            </div>

            <div className="font setting">
                <p>font:</p>
                <div className="font__dropdown dropdown">
                    <select
                        value={font}
                        onChange={(e: any) => {
                            setFont(e.target.value);
                        }}
                    >
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                    </select>
                </div>
            </div>

            <div className="theme setting">
                <p>theme:</p>
                <div className="theme__dropdown dropdown">
                    <select
                        value={theme}
                        onChange={(e: any) => {
                            setTheme(e.target.value);
                        }}
                    >
                        <option value="solarized_dark">Solarized Dark</option>
                        <option value="solarized_light">Solarized Light</option>
                    </select>
                </div>
            </div>

            <div className="mode setting">
                <p>mode:</p>
                <div className="mode__dropdown dropdown">
                    <select
                        value={mode}
                        onChange={(e: any) => {
                            setMode(e.target.value);
                        }}
                    >
                        <option value="vim">Vim</option>
                        <option value="solarized_light">Normal</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Configuration;
