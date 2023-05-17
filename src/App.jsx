import { useDispatch, useSelector } from "react-redux"
import { userInput } from "./features/editor/editorSlice";
import { marked } from "marked";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const editor = useSelector(state => state.editor.value);

  
  useEffect(() => {
    dispatch(userInput("# Main Heading\n## subheading\n__bold text__\n```\nfunction() {\nreturn 'Hello World'\n}\n```\nas opposed to the modern syntax, `() => 'Hello World'`.\n> This a quote\n\n![vite logo](/vite.svg)\n\n[Click here](https://www.devserg.io)\n\n- list item"))
  }, [])

  return (
    <div className="container-fluid bg-primary vh-100">
      <div className="row vh-100 justify-content-center">
        <div className="col-5 m-5 bg-light rounded pb-2">
          <textarea 
            id="editor" 
            className="form-control form-control-lg shadow-none bg-light border border-0 h-100"
            autoFocus={true} 
            spellCheck={false}
            defaultValue={editor}
            onChange={(event) => dispatch(userInput(event.target.value))}
          />
        </div>
        <div 
          id="preview" 
          className="col-5 m-5 bg-light rounded fs-5 p-2 ps-4" 
          dangerouslySetInnerHTML={{ __html: marked(editor, {mangle: false, headerIds: false, gfm: true, breaks: true}) }} 
        />
      </div>
    </div>
  )
}

export default App
