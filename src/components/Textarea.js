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
      <>
    <div className="Container">
        <div className="form-floating">
            <h1>{props.heading}</h1>
    <textarea className="form-control" placeholder="Leave a comment here" value ={text} onChange={handleOnChange} id="floatingTextarea2" row="8"></textarea>
    <button className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Upper case</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lower Case</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleCoClick}>Copy</button>
    <button className="btn btn-primary mx-2 my-2" onClick={clearOnClick}>Clear</button>
        </div>
    </div>
    <div className="Conntainer">
        <h2>Info About your text</h2>
        <p>{text.split(" ").length} Words {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}


