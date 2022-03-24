import React, { useState } from "react";
import './App.css';
import Showitems from './showitems';

const App = () => {
  //inputitem is a variable to store each entry in string format
  const [inputitem, setinputitemsl] = useState("");
  //itemlist is a array which stores the items
  const [itemlist, setitemlist] =useState([]);
  //function which store each entry in inputitem
  const items = (event) =>{
    setinputitemsl(event.target.value);
  };
  //function which stores inputitem in itemlist array
  const assignitem = () =>{
    setitemlist((prevdata) =>
    {
      return [...prevdata,inputitem]
    })
    setinputitemsl("");
  };
  //function which delete items from itemlist array
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
