import '../styles/App.css';
import {useState} from "react";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [current, setCurrent] = useState('/signin');

  return (
      <div className={"App"} style={{width:"100%", height:"100%"}}>
        <Header pageTo={setCurrent}/>
        <div className={"container"}>
            {current === '/signup' && <SignUp pageTo={setCurrent}/>}
            {current === '/signin' && <SignIn pageTo={setCurrent}/>}
            {/*<SubmitOn/>*/}
        </div>
        <Footer/>
      </div>
  );
}

export default App;
