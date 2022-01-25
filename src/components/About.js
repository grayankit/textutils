import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {
  return (
    <div>
      <div className={`card bg-${props.mode}`} style={{color:props.mode==='dark'?'white':"#042743"}}>
        <img src="../../public/github.svg" className="card-img-top" alt="..."/>

        <div className="card-body">
        <h5 className="card-title">Free to use</h5>
        <p className="card-text">This Textutil app is free to use and the code of this website is availabel to opensource</p>
        <a href="/" className="btn btn-primary">Source Code</a>
        </div>
      </div>

      <div className={`card mx-2 my-2 bg-${props.mode}`} style={{color: props.mode==='dark'?'white':'#042743'}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">
            Edit you text in a easy and quick way
          {/* <span className="placeholder col-6"></span> */}
          </h5>
          <p className="card-text">
          <span>Convert to <strong>Uppercase</strong></span>
          </p>
          <p className="card-text">
          <span>Convert to <strong>Lowercase</strong></span>
          </p>
          <p className="card-text">
          <span><strong>Copy </strong>your text to clipboard</span>
          </p>
          <Link to="/" tabIndex="-1" className="btn btn-primary">Home</Link>
        </div>
      </div>
    </div>
  )
}
