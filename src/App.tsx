import React from 'react'; //библиотека из nodemodules
import './App.css';
import Header from "./components/Navigation/Navigation";
import Navigation from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/news' element={<News />}/>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/messages/*" element={<Dialogs />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
