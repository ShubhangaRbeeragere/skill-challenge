import "./configuration.css";
interface Settings {
    language: string;
    font: string;
    mode: string;
    theme: string;
}

function Configuration({
    settings,
    setSettings,
}: {
    settings: Settings;
    setSettings: Function;
}) {
    return (
        <div className="configuration box">
            <div className="language setting">
                <p>language:</p>
                <div className="language__dropdown dropdown">
                    <select
                        value={settings.language}
                        onChange={(e: any) => {
                            setSettings({
                                ...settings,
                                language: e.target.value,
                            });
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
                        value={settings.font}
                        onChange={(e: any) => {
                            setSettings({ ...settings, font: e.target.value });
                        }}
                    >
                        <option value="10px">10</option>
                        <option value="12px">12</option>
                        <option value="14px">14</option>
                        <option value="16px">16</option>
                        <option value="18px">18</option>
                        <option value="20px">20</option>
                    </select>
                </div>
            </div>

            <div className="theme setting">
                <p>theme:</p>
                <div className="theme__dropdown dropdown">
                    <select
                        value={settings.theme}
                        onChange={(e: any) => {
                            setSettings({ ...settings, theme: e.target.value });
                        }}
                    >
                        <option value="solarized_dark">Solarized Dark</option>
                        <option value="solarized_light">Solarized Light</option>
                        <option value="terminal">terminal</option>
                        <option value="gruvbox">Gruv Box</option>
                    </select>
                </div>
            </div>

            <div className="mode setting">
                <p>mode:</p>
                <div className="mode__dropdown dropdown">
                    <select
                        value={settings.mode}
                        onChange={(e: any) => {
                            setSettings({ ...settings, mode: e.target.value });
                        }}
                    >
                        <option value="vim">Vim</option>
                        <option value="normal">Normal</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Configuration;
