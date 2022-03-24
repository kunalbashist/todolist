import React from "react";

const Showitems = (props) =>{

    return(
        <>
            <div className="todo_style">
              <button className="button"  onClick={() => {
                props.onSelect(props.id);
              }}> x </button> 
              <li>{props.id+1}</li>
              <li> . </li>  
              <li>{props.text}</li>
              </div>  
        
        </>
    );
};

export default Showitems;