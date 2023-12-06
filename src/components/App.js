import '../styles/App.css';
import {useState} from "react";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";
import ProductAdd from "./productadd/ProductAdd";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./search/Search";

function App() {
  const [current, setCurrent] = useState('/search');

  return (
      <div className={"App"}>
        {/*<Header event={setCurrent}/>*/}
        {current === '/search' && <Search pageTo={setCurrent}/>}
        
        {/*<SubmitOn/>*/}
        <Footer/>
      </div>
  );
}

export default App;
/*
{current === '/productadd' && <ProductAdd pageTo={setCurrent}/>}
{current === '/signup' && <SignUp pageTo={setCurrent}/>}
        {current === '/signin' && <SignIn pageTo={setCurrent}/>}*/