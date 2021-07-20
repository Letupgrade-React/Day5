import React from 'react';
import CardSection  from './Component/CardSection';
import NavBar  from './Component/navbar';
import './style.css';

const App =()=>{
    return (
        <div>
            <NavBar/>
            <h3 className="mt-5">Day 5 Assignment</h3>          
            <CardSection/>
            
        </div>
    )
}
export default App