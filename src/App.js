import React from 'react';
import './App.css';
import FullName from './components/profile/fullname';
import Adress from './components/profile/adress';
import ProfilePhoto from './components/profile/profilephoto';

const  App = () => {
  return (
    <>
    <Adress/>
    <ProfilePhoto/>
    <FullName/>
    </>
  )
}

export default App;
