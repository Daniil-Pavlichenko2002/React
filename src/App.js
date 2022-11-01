// import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Setings from './components/Setings/Music/Setings';



const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' 
              element={<Profile 
                updateNewPostText={props.updateNewPostText}
                profilePage={props.state.profilePage}
                addPost={props.addPost} />}/>
            <Route path="/dialogs" 
              element= {<Dialogs 
                dialogsPage={props.state.dialogsPage} 
                newMessageText={props.state.dialogsPage.newMessageText}
                addMessage={props.addMessage}
                updateNewMessageText={props.updateNewMessageText} />}/>
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/setings' element={<Setings/>} />
          </Routes>
        </div>
      </div>

  );
}


export default App;
