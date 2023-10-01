import React from "react";
import './Pagination.css';
//import { useState } from "react";


function Pagination(props){
        const [currentPage, setCurrentPage] = useState(1);
        const [btnValues, setBtnValues] = useState([1, 2, 3,'...', 10 ]);
        state = {btnValues : [1, 2, 3,'...', 10 ]};
       
     
   const changeBtns = (newvalue) => {
      if (newvalue !== '...'){
        this.setCurrentPage(newvalue);
       } 
       else{
            setBtnValues( [4,5,6,7,8,9]);
             
         }
}
        
        return (
            <div className="pagination-container">
                <button id="prev" onClick={() => currentPage !== 1?setCurrentPage(currentPage -1):''}>Prev</button>
                {btnValues.map((btn, index)=> {
                    return (
                    <button key={index} id="current-page" value={btn} onClick={() => changeBtns(btn)} className={btn === currentPage?'current-page':''} >
                        {btn}</button>
                    );
                })}
                
                
                <button id="next" onClick={() => currentPage < 10?setCurrentPage(currentPage + 1):''}>Next</button>
            </div>
        )
    }
    

