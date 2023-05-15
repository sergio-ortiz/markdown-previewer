function App() {
  return (
    <div className="container-fluid bg-primary vh-100">
      <div className="row vh-100 justify-content-center">
        <div className="col-5 m-5 bg-light rounded">
          <textarea id="editor" className="form-control form-control-lg shadow-none bg-light border border-0" autoFocus={true} />
        </div>
        <div id="preview" className="col-5 m-5 bg-light rounded">
        </div>
      </div>
    </div>
  )
}

export default App
