import React from 'react';
import './Home.css';
import Header from '../Header/Header';


function HomePage(){
    return(
        <div className='home-container'>

          <Header />
        <div className='content-container'> 
          <div className='txt'>
              <div className='meet'>Meet</div>
               <div className='your-fav'>
                Your favorite Starwars <br/>
                charactors
                
               </div>
               
               <div className='recently'>Recently viewed</div>
            
            </div> 
          <div className='photo-room'></div>
          
          <div className='item-1'><div className='view'>View</div></div>
          <div className='item-2'><div className='view'>View</div></div>
          <div className='item-3'><div className='view'>View</div></div>
          <div className='dots'>
            <div className='dot-1'></div>
            <div className='dot-2' ></div>
            <div className='dot-3'></div>
          </div>
                  
               <div className="footer"></div>
                <div className="sw-logo"></div> <div className="TM-txt">TM & © Lucasfilm Ltd. All Rights Reserved</div>
          
        </div>
        </div>
    );
    
}
export default HomePage;