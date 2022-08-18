// rfce

import React, {useState} from 'react'

export default function TextForm(props) {


    const onChangeFunc = (event)=>{
        // console.log("I'm changed ");
        setText(event.target.value);
    }
    
    const changeToUpperCase = ()=>{
        // console.log("I'm clicked " +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to UpperCase",'success');
        
    }

    const changeToLowerCase = ()=>{
        // console.log("I'm clicked " +text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to LowerCase",'success');

    }

    const changeToCapitalizeCase = ()=>{
        // console.log("I'm clicked " +text);
        let newText = text.split(" ").map(a => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()).join(" ");
        // let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Changed to Capitalize",'success');

    }

    const wordCount = (text)=>{

        if(text===""){
            return 0;
          }
          let arr = text.split(" "); //a b c d 1 2 3   
          let len = arr.length; 
          let count=0;
          
          for(let i=0;i<len;i++){
            if(arr[i]==='' || arr[i]===' '){
               count++;
            }
          }
          return len-count;
          //return text.length>0?text.trim().split(' ').length:0;
        }
    

  const [text,setText] = useState('');  


  return (
    <>
    <div className="container m-3">
    <h3>{props.heading}</h3>

    <div className="mb-3">
      <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} id="myBox" rows="8" 
      style={{backgroundColor: props.mode==='light'?'white':'grey'}}
      onChange={onChangeFunc} value={text} ></textarea>
    </div>

    <button className="btn btn-primary mx-2" onClick={changeToUpperCase} >Change to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={changeToLowerCase} >Change to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={changeToCapitalizeCase} >Change to Capitalize</button>

    </div>

    <div className="container">
        <p><b>Text Summart</b></p>
        <p>Words : {wordCount(text)}</p>
        <p>Characters : {text.length} </p>
        <p>Minutes Read : {0.008 * text.slice(" ").length}</p>
        <p>Preview : {text.length===0?'Enter the Text above':text}</p>
        
    </div>

    </>
  );
}
