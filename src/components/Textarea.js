import React,{useState} from 'react'

export default function Textarea(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to uppercase","success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text changed to lowercase","success")
    }
    const handleCoClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard","success")
    }
    const clearOnClick = ()=>{
        setText('');
        props.showAlert("Text cleared!","success")
    }
    const [text, setText] = useState('');
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <div className="form-floating">
            <h1>{props.heading}</h1>
    <textarea className="form-control" placeholder="Leave a comment here" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="floatingTextarea2" row="8"></textarea>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Upper case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lower Case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCoClick}>Copy</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearOnClick}>Clear</button>
        </div>
    </div>
    <div className="Conntainer" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Info About your text</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} Words {text.length} Characters</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{ return element.length!== 0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}


