import '../styles/App.css';
import {useState} from "react";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";
import Header from "./Header";
import Footer from "./Footer";
import { Search } from '@mui/icons-material';

function App() {
  const [current, setCurrent] = useState('/signin');

  return (
      <div className={"App"}>
        <Header event={setCurrent}/>
        {current === '/signup' && <SignUp pageTo={setCurrent}/>}
        {current === '/signin' && <SignIn pageTo={setCurrent}/>}
        {current === '/search' && <Search pageTo={setCurrent}/>}
        {/*<SubmitOn/>*/}
        <Footer/>
      </div>
  );
}

export default App;
