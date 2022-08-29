import React from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Middle from "./components/middle";
import '../src/App.css';

const App=()=>{
  return(
    
 <div className="App">
<Nav/>
<Middle/>
<Footer/>
 </div>

  )
}

export default App