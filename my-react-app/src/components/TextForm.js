import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here!")
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("Change handle");
        setText(event.target.value)
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-1">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{text.split(" ").length /2} Seconds or {(text.split(" ").length /120).toFixed(2)} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
