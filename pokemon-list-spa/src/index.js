import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.render( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = '/'
        element = { <
            App / >
        }
        /><
        Route path = '/pokemonInfo'
        element = { < div > Pokemon info < /div>} / >
            <
            Route path = '/pokemonInfo'
            element = { < div > Pokemon info < /div>} / > <
                Route path = '/alumnInfo'
                element = { < div > Informacion Del Alumno < /div>} / >
                    <
                    /
                    Routes >
                    <
                    /BrowserRouter > ,
                    document.getElementById('root')
                );