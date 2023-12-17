import React, { useContext, useState } from "react";
import './style.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CachedIcon from '@mui/icons-material/Cached';
// import { Controlled as ControlledEditor } from 'react-codemirror2'
// // import CodeMirror from 'react-codemirror2';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/mode/xml/xml';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/css/css';
import { Context } from "../../../context/Provider";
import Editor from "@monaco-editor/react";


const Editors = ({ language, lang, code, onchange }) => {

    let [open, setOpen] = useState(true);

    const { setHtml, setCss, setJs } = useContext(Context);

    function handleChange(value) {
        onchange(value);
    }

    function refresh() {
        if (language === 'html') {
            setHtml('');
            return;
        }
        if (language === 'css') {
            setCss('');
            return;
        }
        if (language === 'javascript') {
            setJs('');
            return;
        }
        console.log('Something went wrong!');
        return;
    }

    return (
        <div className="editor-Container" style={open ? { flexGrow: 1, minWidth: '20%' } : { flexGrow: 0, minWidth: '160px' }}>
            <div className="title">
                <div className={`title-left ${lang === ('< HTML />') ? 'html' : lang === ('* { CSS }') ? 'css' : 'js'}`}>
                    {lang}
                </div>
                <div className="title-right">
                    <CachedIcon className="refreshIcon" onClick={refresh} />
                    {
                        open ?
                            <ExpandLessIcon className="icon" onClick={() => { setOpen(false) }} />
                            :
                            <ExpandMoreIcon className="icon" onClick={() => { setOpen(true) }} />
                    }
                </div>
            </div>

            <div className="monacoEditor">
                <Editor
                    height="300px"
                    width={'auto'}
                    language={language}
                    value={code}
                    theme='vs-dark'
                    onChange={(value)=>{handleChange(value)}}
                    minimap={{ enabled: false }}
                    automaticLayout={true}
                    // style={open ? { width: '400px' } : { width: '160px' }}

                />
            </div>
        </div>
    )
}

export default Editors;


// className="controlled-editor"
// value={value}
// onBeforeChange={handleChange}
// options={{
//     mode: `${language}`,
//     theme: 'material',
//     lineNumbers: true,
//     lint: true,
//     lineWrapping: true,
//     lineSeparator: true
// }}