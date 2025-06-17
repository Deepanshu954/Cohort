import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useRef } from "react";
function App()
{
  return (
    <>
      <BrowserRouter>

        <Routes>
          
          <Route path = "/" element = {<Layout /> } >
            <Route path = "neet/online-coaching-class-11" element ={<Class11 />} />
            <Route path = "neet/online-coaching-class-12" element = {<Class12 />} />
            <Route path = "/Login" element = {<Reference />} />
            <Route index element={<Landing />} />
            <Route path = "*" element = {< ErrorPage /> } />
          </Route> 

        </Routes>

      </BrowserRouter>
    </>
  )
}

function Layout()
{
  return <div style ={{height : "100vh"}}>

    {/* Navbar */}
    <div style ={
    {
      display : "flex",
      justifyContent : "center",
      fontSize : '2rem',
      height : "10vh",
      paddingLeft : "2rem",
      background: '#f5f5f5',
      borderRadius: '12px',
      margin: '1rem',
      boxShadow: '0 2px 8px #ccc'
      
    }}>
      <div style ={{paddingLeft : 50,margin : "1.5rem"}}> <Link to = "/" > Allen </Link> </div>
      <div style ={{paddingLeft : 50,margin : "1.5rem"}}> <Link to = "/neet/online-coaching-class-11" > Class 11 </Link></div>
      <div style ={{paddingLeft : 50,margin : "1.5rem"}}> <Link to = "/neet/online-coaching-class-12" > Class 12 </Link></div>
      <div style ={{paddingLeft : 50,margin : "1.5rem"}}> <Link to = "/Login" > Login </Link> </div>
    </div>

    {/* Content */}
    <div style={{
      height: "70vh",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      color: '#333',
      background: '#f5f5f5',
      borderRadius: '12px',
      margin: '2rem',
      boxShadow: '0 2px 8px #ccc'
    }}>
      <Outlet />
    </div>

    {/* Footer */}
    <div style ={
    {
      height : "20vh",
      display : "flex",
      justifyContent : "center",
      fontSize : "1.5rem",
      color : "grey",
      margin : "1rem",
      paddingTop : "2rem",
      boxShadow: '0 2px 8px #ccc',
      background: '#f5f5f5', 
      borderRadius: '12px', 
    }}>
      <div style ={{paddingLeft : "3rem", cursor : "pointer",}}> About Us </div>
      <div style ={{paddingLeft : "3rem", cursor : "pointer",}}> Help & Support </div>
      <div style ={{paddingLeft : "3rem", cursor : "pointer",}}> Courses </div>
      <div style ={{paddingLeft : "3rem", cursor : "pointer",}}> Contact </div>
    </div>
  </div>
}

function Landing()
{
  return ( 
    <>
      <div>
        🚀 This Is Allen Landing Page.
      </div>
      <div style={{ fontSize: '1rem', marginTop: '1rem', color: '#666' }}>
        Welcome! You are on the landing page.
      </div>
    </>
  )
}

function Class11()
{
  return ( 
    <div>Class 11 Courses</div>
  )
}

function Class12() 
{
  return ( 
    <div>Class 12 Courses</div>
  )
}

function ErrorPage()
{
  return ( 
    <div>Error No Page Found</div>
  )
}


function Reference()
{
  const inputRef = useRef();
  let navigate = useNavigate();

  function focusOnInput()
  {
    inputRef.current.focus();
  }

  function login()
  {
    navigate("/");
  }

  return (
    <>
      <div>
        <div>
          <input ref = {inputRef} type = "text" placeholder = "Enter Username" />
        </div>
        <div>
          <input type = "text" placeholder = "Enter Password" />
        </div>
        <br></br>
        <div>
          <button onClick = {focusOnInput}> SignUp </button>
          <button onClick = {login}> Login </button>
        </div>
      </div>
    </>
  )
}

export default App