import { createContext } from "react";
import useLocalStorage from "../Hook/useLocalStorage";
import { availableLanguage } from "../constantData/availableLanguages";

export const Context = createContext();


const Provider = ({children})=>{
    const [html, setHtml] = useLocalStorage('html', '');
    const [css, setCss] = useLocalStorage('css', '');
    const [js, setJs] = useLocalStorage('js', '');
    const [codes, setCodes] = useLocalStorage('codes', '');
    const [language, setLanguage] = useLocalStorage('lang', availableLanguage[0]);

    return(
        <Context.Provider value={{
            html, setHtml, css, setCss, js, setJs, codes, setCodes, language, setLanguage
        }}>
            {children}
        </Context.Provider>
    )
}

export default Provider;