import React from 'react';
import './App.css';
import HeadSection from './Components/HeaderSection/HeadSection';
import Users from './Components/Users/ShowUsers';

function App() {
  return (
    <div className="Main">
     <HeadSection></HeadSection>
     <Users></Users>
    </div>
  );
}

export default App;
