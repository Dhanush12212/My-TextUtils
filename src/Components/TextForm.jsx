import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");

  //Convert To UpperCase
  const convertUpText = () => {
    console.log("Convert to Up button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" UpperCase Converted","success");
  };

  //Convert To LowerCase
  const convertLoText = () => {
    console.log("Convert to Low button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" LowerCase Converted","success");

  };

  //Clear Text
  const clearText = () => {
    console.log("ClearText button clicked");
    let newText = "";
    setText(newText);
    props.showAlert(" Text cleared","success");

  };

  //Copy Text
  const CopyText = () => {
    console.log("Text Copied");
    let copyTextArea = document.getElementById("copy-text"); 
    copyTextArea.select(); // Select the content
    navigator.clipboard.writeText(copyTextArea.value) 
    props.showAlert(" Text copied","success");

  };
  

  const handleOnChange = (e) => {
    console.log("Clicked handleOnChange");
    setText(e.target.value);  
  };

  //Remove Extra space from text
const removeSpace = () => {
  console.log("SPace removed")
  // Split the text by one or more spaces and join it back with a single space
  let newText1 = text.split(/\s+/).join(" "); 
  setText(newText1);
  
  // Show an alert indicating the spaces have been removed
  props.showAlert("Spaces removed", "success");
} 

  return (
    <>
      <form className={`p-10 text-center h-full bg-${props.bgmode} text-${props.mode==='dark'? 'light':'dark'} h-screen`}>
        <h1 className="text-4xl my-5 font-bold">{props.heading}</h1>
        <textarea className="form-control border-blue-400 text-xl  my-4 text-centr p-3" id="copy-text" rows="8" onChange={handleOnChange} value={text} placeholder="Enter text here"></textarea> 
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={convertUpText}> Convert to UpperCase </button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={convertLoText}>Convert to LowerCase</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={removeSpace}>Remove Space</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={CopyText}>Copy Text</button> 
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear Text</button>
        <h1 className="text-2xl my-3">Your Text Summary</h1>
        <p className="text-xl">{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} Words and {text.length} Characters</p>
        <p className="text-xl">{0.008 * text.split(" ").length}sec Time taken</p>
        <h2 className="text-3xl my-5 font-semibold">Preview</h2> 
        <p className="text-xl">{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
      </form>
    </>
  );
}
