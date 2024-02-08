//import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";

function App() {
  const[mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black'; // you can pass here any color
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar tittle = "TextUtils3" mode = {mode} toggleMode = {toggleMode} textAbout = "About TextUtiles"/>
    <div className="container my-3">
    <TextForms heading = "Enter the text here to analyze... " mode = {mode}/>
      {/*<About/>*/}
    </div>
  </>
  );
}

export default App;
