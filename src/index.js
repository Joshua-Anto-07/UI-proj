import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './assets/logo.png';
import MainContent from './MainContent.js'

const div = document.getElementById('root');


function Header(){
    return(
        <header>
                <nav className='nav' >
                    <img src={logo} className='img-logo' />
                    <ul className = 'nav-items'>
                        <li>Pricing </li>
                        <li>About  </li>
                        <li>Contact </li>
                    </ul>
                </nav>
            </header>
    );
}

function Footer(){
    return(
        <footer>20xx Anto development. All rights reserved."</footer>
    )   ;
}

function Page(){
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )

}   

ReactDOM.render(<Page />, div);

//ReactDOM.createRoot(document.getElementById('root')).append(navbar)


reportWebVitals();

