import React, {useState} from "react";

const Form = (props) => {

    const [text, setText] = useState('');

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been changed to upper case", "success");
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been changed to lower case", "success");
    }

    const handleClearText = ()=> {
        setText('');
        props.showAlert("Text has been cleared", "warning");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopyText = ()=>{
        let text = document.getElementById("textarea");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied to the clipboard", "success");
    }

    
  return (
    <>
    <div className="container" style={{color : props.mode === 'dark' ? "white" : "black"}}>
        <h1 className="my-2">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            name="textarea"
            id="textarea"
            style={{width:"100%", color : props.mode === 'dark' ? "white" : "black", backgroundColor: props.mode === 'dark' ? "#ffffff0d" : "white", outlineColor: props.mode === 'dark' ? "white" : "black", borderColor: props.mode === 'dark' ? "white" : "black"}}
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Change to UpperCase
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Change to LowerCase
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
      
    </div>

    <div className="container my-3" style={{color : props.mode === 'dark' ? "white" : "black" }}>
        <h4>Text Summary</h4>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h5>Preview</h5>
        <p>{(text.length>0 ? text: "Enter something in the textbox to preview it here")}</p>
    </div>
    </>
  );
};

export default Form;
