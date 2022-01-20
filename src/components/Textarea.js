import React,{useState} from 'react'

export default function Textarea(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCoClick = ()=>{
        navigator.clipboard.writeText(text)
    }
    const clearOnClick = ()=>{
        setText('')
    }
    const [text, setText] = useState('');
  return (
    <div>
        <div className="form-floating">
            <h1>{props.heading}</h1>
    <textarea className="form-control" placeholder="Leave a comment here" value ={text} onChange={handleOnChange} id="floatingTextarea2" row="8"></textarea>
    <button className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Upper case</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lower Case</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleCoClick}>Copy</button>
    <button className="btn btn-primary mx-2 my-2" onClick={clearOnClick}>Clear</button>
        </div>
    </div>
  )
}


