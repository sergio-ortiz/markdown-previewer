function App() {
  return (
    <div className="container-fluid bg-primary vh-100">
      <div className="row vh-100 justify-content-center">
        <textarea id="editor" className="col-5 m-5 bg-light rounded">
        </textarea>
        <div id="preview" className="col-5 m-5 bg-light rounded">
        </div>
      </div>
    </div>
  )
}

export default App
