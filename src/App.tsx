import React from 'react'; //библиотека из nodemodules
import './App.css';
import Header from "./components/Navigation/Navigation";
import Navigation from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <Profile/>
        </div>
    );
}


export default App;
