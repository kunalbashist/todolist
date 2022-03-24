import React, { useState } from "react";
import './App.css';
import Showitems from './showitems';

const App = () => {

  const [inputitem, setinputitemsl] = useState("");

  const [itemlist, setitemlist] =useState([]);

  const items = (event) =>{
    setinputitemsl(event.target.value);
  };

  const assignitem = () =>{
    setitemlist((prevdata) =>
    {
      return [...prevdata,inputitem]
    })
    setinputitemsl("");
  };

  const delitem = (id) =>{
    setitemlist((prevdata) => {
      return prevdata.filter((arritem,index)=>{
         return index !== id;
      });
    });
  };

  return(
  <>
    <div className="main">
      <div className="content">
        <br />
       <h1>Todo List</h1>
       <br />
      <input type="text" placeholder="Add a Items"
      value={inputitem} onChange={items} />
      <button className="button" onClick={assignitem}> + </button>

      <ol>
        {
          itemlist.map((val, index) =>{
            return (
             <Showitems 
              key={index}
              id={index}
              text={val}
              onSelect={delitem}
            /> 
            );
          })
        }
      </ol>
      </div>
    </div>
  </>
  )
};

export default App;
