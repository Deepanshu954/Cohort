import "./App.css"
function App()
{
  function SendMessage()
  {

  }

  return (
    <div>
      <div>
        <input type ="text" placeholder="Message..." ></input>
      </div>
      <div>
        <button onClick = {SendMessage}> Send </button>
      </div>
    </div>
  )
}

export default App