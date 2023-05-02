import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';


const Main = () => {
    return (
        <div className='overall-container'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;