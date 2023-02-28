import "./App.css";
import { useState } from "react";
import { translateText } from "./lang/data";

//Components
import RenderList from "./components/RenderList";

export default function App() {
    const [language, setLang] = useState("pt");

    document.querySelector("html").lang = language;

    let changeLang = language === "pt" ? "en" : "pt";

    return (
        <div className="App container">
            <h1>Get lang by Javascript/React</h1>

            <RenderList
                description={translateText.description[language]}
                text={translateText.see_more[language]}
            />
            <button
                onClick={() => {
                    setLang(changeLang);
                }}
            >
                {translateText.button[language]}
            </button>
        </div>
    );
}
