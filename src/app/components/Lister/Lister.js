import React from "react";
import './Lister.css';
import Header from "../Header/Header";
import Pagination from '../Pagination/Pagination';

          
function Lister(props){
 
    return(
     
        <div className="lister-container">
            <Header isLister={true} />
            <div className="frame-container">
                <div className="frame">
                    <div className="icon-txt">
                    <div className="icon"></div>
                    <div className="txt">Popular</div>
                    </div>

                    <div className="season">
                    <div className="icon"></div>
                    <div className="txt">Season 1</div>
                    </div>

                    <div className="season">
                    <div className="icon"></div>
                    <div className="txt">Season 2</div>
                    </div>

                    <div className="season">
                    <div className="icon"></div>
                    <div className="txt">Season 3</div>
                    </div>

                    <div className="season">
                    <div className="icon"></div>
                    <div className="txt">Season 4</div>
                    </div>

                    <div className="search-container">
                        <div className="gala-search"></div>
                        <div className="line">|</div>
                        <input type="text" placeholder="Search"></input>
                        <div className="charm-cross"></div>
                    </div>

                </div>
            </div>
            <div className="grid-container">
               <div className="item1">
                  <div className="inside">
                   <div className="inside1"></div>
                    <div className="charactor">{}</div>
                    <div className="actor">Ewan McGregor</div>
                    <div className="learn-more">Learn More{'>'}</div>
                   </div>
                </div>

                
                 <div className="item2">
                  <div className="inside">
                   <div className="inside1"></div>
                   </div>
                  <div className="charactor">Yoda</div>
                    <div className="actor">Frank Oz</div>
                    <div className="learn-more">Learn More{'>'}</div>
                 </div>
                  
                 <div className="item3">
                  
                   <div className="inside1"></div>
                   
                  <div className="charactor">Luke SkyWalker</div>
                    <div className="actor">Mark Hamill</div>
                    <div className="learn-more">Learn More{'>'}</div>
                 </div>

                 <div className="item4">
                   <div className="inside1"></div>
                  <div className="charactor">Luke SkyWalker</div>
                    <div className="actor">Mark Hamill</div>
                    <div className="learn-more">Learn More{'>'}</div>
                 </div>

                 <div className="item5">
                  <div className="inside">
                   <div className="inside1"></div>
                    <div className="charactor">Obi-Wan Kenobi</div>
                    <div className="actor">Ewan McGregor</div>
                    <div className="learn-more">Learn More{'>'}</div>
                    </div>
                   </div>

                  <div className="item6">
                  <div className="inside">
                   <div className="inside1"></div>
                   </div>
                  <div className="charactor">Yoda</div>
                    <div className="actor">Frank Oz</div>
                    <div className="learn-more">Learn More{'>'}</div>
                 </div>
               
                 <div className="item7">
                  <div className="inside">
                   <div className="inside1"></div>
                   </div>
                  <div className="charactor">Yoda</div>
                    <div className="actor">Frank Oz</div>
                    <div className="learn-more">Learn More{'>'}</div>
                 </div>

                 <div className="item8">
                   <div className="inside1"></div>
                  <div className="charactor">Luke SkyWalker</div>
                    <div className="actor">Mark Hamill</div>
                    <div className="learn-more">Learn More{'>'}</div>
                 </div>

                 <div className="item9">
                  <div className="inside">
                   <div className="inside1"></div>
                    <div className="charactor">Obi-Wan Kenobi</div>
                    <div className="actor">Ewan McGregor</div>
                    <div className="learn-more">Learn More{'>'}</div>
                   </div>
                </div>

                <div className="pagination">
                {/*<Pagination /> */}</div>
            </div>

           
                <div className="lister-footer"></div>
                <div className="sw-logo"></div> <div className="TM-txt">TM & © Lucasfilm Ltd. All Rights Reserved</div>
        
        </div>
    )
}
export default Lister;