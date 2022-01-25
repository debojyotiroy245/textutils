import React,{useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {

    const handleUpClick = ()=>{
        setText(text.toUpperCase())
    }
    const handleLoClick = ()=>{
        setText(text.toLowerCase())
    }
    const handleClearClick = ()=>{
        setText('')
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleCopy =()=>{
        let text=document.getElementById('textBox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const handleRES=()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
    }
    const [text,setText]=useState('')
    
    // const dark_mode = {
    //     color: 'white',
    //     backgroundColor: 'black',
    // }
    // const light_mode = {
    //     color: 'black',
    //     backgroundColor: 'white',
    // }
    // const [btn,setBtn] = useState('Dark')
    // const [mode,setMode] = useState(light_mode)
    // const handleMode = ()=>{
    //     if(btn==='Dark'){
    //         setMode(dark_mode)
    //         setBtn('Light')
    //         console.log('dark mode enabled')
    //     }
    //     else if(btn==='Light'){
    //         setMode(light_mode)
    //         setBtn('Dark')
    //         console.log('Light mode enabled')
    //     }
    // } 


    const textColor = {color: props.mode==='dark'?'white':'black'}
    const textarea = {backgroundColor: props.mode==='dark'?'#a3a3a3':'white',color: props.mode==='dark'?'white':'black'}
  return (
    <>
        <div className='container my-3' style={textColor}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="textBox" rows="8" value={text} onChange={handleOnChange} placeholder='Enter text here' style={textarea}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UPPERCASE</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleRES}>Remove extra spaces</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear All</button>
            {/* <button className="btn btn-danger mx-1" onClick={handleMode} style={mode}>{btn} Mode</button> */}
        </div>
        <div className="container my-2" style={textColor}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
);
}
TextForm.prototype={
    mode: PropTypes.string.isRequired
}
