//import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Alert from "./components/Alert";

function App() {
  const[mode, setMode] = useState('light')
  const[alert, setAlert] = useState(null)

  {/*const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type  // you can keep name as parameter sames
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }*/}

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black'; // you can pass here any color
      //showAlert("Dark mode has been enabled", "success")
      // To set page titles name then use below :
      document.title = 'TextUtils - Dark mode'

      setInterval(()=>{
        document.title = 'TextUtils is Amazing mode'
      }, 2000)

      setInterval(() => {
        document.title = 'Install TextUtils Now'
      }, 1500);
      

    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      //showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light mode'
    }
  }
  return (
    <>
    <Navbar tittle = "TextUtils3" mode = {mode} toggleMode = {toggleMode} textAbout = "About TextUtiles"/>
    {<Alert alert={alert}/>}
    <div className="container my-3">
      {/*<TextForms showAlert ={showAlert} heading = "Enter the text here to analyze... " mode = {mode}/>*/}
      <TextForms heading = "Enter the text here to analyze... " mode = {mode}/>
      {/*<About/>*/}
    </div>
  </>
  );
}

export default App;
