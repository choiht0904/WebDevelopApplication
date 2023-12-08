import '../styles/App.css';
import {useState} from "react";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./search/Search";

function App() {
  const [current, setCurrent] = useState('/search');
  
  return (
    
      <div className={"App"} style={{width:"100%", height:"100%"}}>
        <Header pageTo={setCurrent}/>
        <div className={"container"}>
            {current === '/signup' && <SignUp pageTo={setCurrent}/>}
            {current === '/signin' && <SignIn pageTo={setCurrent}/>}
            {current === '/search' && <Search pageTo={setCurrent}/>}
            {/*<SubmitOn/>*/}
        </div>
        <Footer/>
      </div>
  );
}
export default App;