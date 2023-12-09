import '../styles/App.css';
import {useState} from "react";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./search/Search"
import ProductList from "./productlist/ProductList";
import SubmitOn from "./productadd/ProductAdd";
import Profile from "./profile/Profile";
import TeamIntro from "./teamIntro";

function App() {
  const [current, setCurrent] = useState('/');

  return (
      <div className={"App"} style={{width:"100%", height:"100%"}}>
        <Header pageTo={setCurrent}/>
        <div className={"container"}>
            {current === '/signup' && <SignUp pageTo={setCurrent}/>}
            {current === '/signin' && <SignIn pageTo={setCurrent}/>}
            {current === '/search' && <Search pageTo={setCurrent}/>}
            {current === '/profile' && <Profile pageTo={setCurrent}/>}
            {current === '/addProduct' && <SubmitOn/>}
            {current === '/' && <TeamIntro/>}

        </div>
        <Footer/>
      </div>
  );
}

export default App;
