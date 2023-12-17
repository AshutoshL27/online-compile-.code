import React from "react";

import Editor from "@monaco-editor/react";

const EditorWindow = ({ onChange, language, code }) => {
//   const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    // setValue(value);
    onChange(value);
  };

  return (
    <div className="devEditorContainer">
      <Editor
        height="80dvh"
        width={`100%`}
        language={language || "javascript"}
        value={code}
        theme='vs-dark'
        onChange={(value)=>{handleEditorChange(value)}}
      />
    </div>
  );
};
export default EditorWindow;