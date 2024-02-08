import About from "./components/About";
import Navbar from "./components/Navbar";
//import TextForms from "./components/TextForms";

function App() {
  return (
    <>
    <Navbar tittle = "TextUtils3" textAbout = "About TextUtiles"/>
    <div className="container my-3">
      {/*<TextForms heading = "Enter the text here to analyze... "/>*/}
      <About/>
    </div>
  </>
  );
}

export default App;
