import React from'react';
import './Header.css';
import Link from 'next/link';

// This header used in all pages and adjusts its appearance according to the calling page.
function Header(props) {
    {
       return (
        <div className="container" style={props.isLister?{height:164 + 'px'}:{height:145 + 'px'}}>
           <Link href='../'> <div className='logo'></div></Link>
            {props.isLister || props.isError?'': 
            <div className='search'>
               <div className='search-img'></div>
                <div className='search-txt'>Search</div>
             </div>}
            <div className='home'>
                 <Link href='../'>Home</Link>
            </div>
            <div className='lister'>
                 <Link href='/lister'>Lister</Link>
            </div>
      </div>
    );
}
      
} export default Header;
  