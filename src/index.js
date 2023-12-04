import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/singin/SignIn";
import Search from "./components/search/Search";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {  /*<SignUp/>*/}
      {/*<SignIn/>*/}
      {<Search/>}
  </React.StrictMode>
);
