import React from 'react';
import Header from './header/Header';
import Landing from './landing/Landing';
import Portfolio from './portfolio/Portfolio';
import About from './aboutcomponent/About';
const App = () =>{
    return(
        <div>
            <Header/>
            <Landing />
            <Portfolio/>
            <About />
        </div>
    )
}
export default App;