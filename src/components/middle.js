import React from "react";

import "../../src/middle.css";
import SearchIcon from '@mui/icons-material/Search';
import ChatList from "./ChatList";

const Middle = () => {
  return (
    <section className="middle">
      <div className="left">
       <div className="searchBox">
        <div className= "box">
            <input type= "text" placeholder="Search"></input>
          
              <button type="search_Button"> <SearchIcon/> </button>
              <ChatList/>
         
        </div>

       </div>
      </div>
    </section>
  );
};

export default Middle;
