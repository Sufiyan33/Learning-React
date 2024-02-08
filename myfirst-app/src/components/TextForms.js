import React from 'react'
import { useState } from 'react'

export default function TextForms(props) {
    const[text, setText] = useState('Enter text here...')
    //setText('new text')

    const handleUpClick = () =>{
        console.log("UpperCase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        //commenting below line of code due to bug
        //props.showAlert("Converted to upperCase", "success")
    }
    const handleLocClick= ()=>{
        console.log("LowerCase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        //commenting below line of code due to bug
        //props.showAlert("Converted to upperCase", "success")
    }

    const handleClearClick= () =>{
        let clearText = ' '
        setText(clearText)
        //commenting below line of code due to bug
        //props.showAlert("Converted to upperCase", "success")
    }

    const handlerOnChange =(event)=>{
        console.log("On change")
        setText(event.target.value)
    }
  return (
    <>
        <div>
        <div className="mb-3" style={{color: props.mode==='dark'?'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value= {text} onChange={handlerOnChange} style={{backgroundColor: props.mode==='dark'? 'black':'white', color: props.mode==='dark'? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={handleLocClick} >Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick} >Clear</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white' : 'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split('').length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter your text to preview it here 🙂"}</p>
        </div>
    </>
  )
}
