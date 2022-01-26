import React,{useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const alert=(message,type)=>{
        props.showAlert(message,type)
    }
    const handleUpClick = ()=>{
        setText(text.toUpperCase())
        alert("Converted to uppercase!","success")
    }
    const handleLoClick = ()=>{
        setText(text.toLowerCase())
        alert("Converted to lowercase!","success")
    }
    const handleClearClick = ()=>{
        setText('')
        alert("Text cleared!","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleCopy =()=>{
        let text=document.getElementById('textBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        alert("Copied to clipboard!","success")
    }
    const handleRES=()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        alert("Extra spaces removed!","success")
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
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UPPERCASE</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRES}>Remove extra spaces</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear All</button>
            {/* <button className="btn btn-danger mx-1" onClick={handleMode} style={mode}>{btn} Mode</button> */}
        </div>
        <div className="container my-2" style={textColor}>
            <h3>Your text summary</h3>
            <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h3>Preview</h3>
            <p>{text?text:'Nothing to preview'}</p>
        </div>
    </>
);
}
TextForm.prototype={
    mode: PropTypes.string.isRequired
}
