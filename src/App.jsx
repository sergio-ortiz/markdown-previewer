import { useDispatch, useSelector } from "react-redux"
import { userInput } from "./features/editor/editorSlice";

function App() {
  const dispatch = useDispatch();
  const editor = useSelector(state => state.editor.value);

  return (
    <div className="container-fluid bg-primary vh-100">
      <div className="row vh-100 justify-content-center">
        <div className="col-5 m-5 bg-light rounded pb-2">
          <textarea 
            id="editor" 
            className="form-control form-control-lg shadow-none bg-light border border-0 h-100"
            autoFocus={true} 
            spellCheck={false}
            onChange={(event) => dispatch(userInput(event.target.value))}
          />
        </div>
        <div id="preview" className="col-5 m-5 bg-light rounded fs-5 p-2 ps-4">
          {editor}
        </div>
      </div>
    </div>
  )
}

export default App
