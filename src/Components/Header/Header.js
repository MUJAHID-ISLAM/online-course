import React from 'react';
import logo from '../../images/stock-vector-students-watching-online-training-video-with-teacher-and-chart-on-tablet-online-teaching-share-1331332631.png';
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>     
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/home">Course</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
          
            </nav>
        </div>
    );
};

export default Header;