import React from 'react'
import { useState } from 'react'

export default function TextForms(props) {
    const[text, setText] = useState('Enter text here...')
    //setText('new text')

    const handleUpClick = () =>{
        console.log("UpperCase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handlerOnChange =(event)=>{
        console.log("On change")
        setText(event.target.value)
    }
  return (
    <div>
      <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value= {text} onChange={handlerOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick} >convert to UpperCase</button>
    </div>
  )
}
