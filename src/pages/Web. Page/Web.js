
import Editors from '../../components/web/WebEditors'
import { useContext } from 'react';
import { Context } from "../../context/Provider";
import Result from '../../components/web/Result';

function Web() {

  const {html, setHtml, css, setCss, js, setJs} = useContext(Context);

  return (
    <div className="Web">
      <div className="top-pane">
        <Editors language={'html'} lang={'< HTML />'} code={html} onchange={setHtml} />
        <Editors language={'css'} lang={'* { CSS }'} code={css} onchange={setCss} />
        <Editors language={'javascript'} lang={'Js { }'} code={js} onchange={setJs} />
      </div>
      <div className="bottom-pane">
        <Result />
      </div>
    </div>
  );
}

export default Web;