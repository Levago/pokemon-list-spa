import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AlumnInfo from './components/alumnInfo';
import Pokemons from './components/pokemons';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


ReactDOM.render( <
    BrowserRouter >
    <
    Routes >
    <
    Route path = '/pokemons'
    element = { <
        App / >
    }
    /><
    Route path = '/pokemon'
    element = { < Pokemons / > }
    / > <
    Route path = '/Matricula'
    element = { < AlumnInfo / > }
    / > <
    Route path = '*'
    element = { < Navigate replace to = '/pokemons' /
        >
    }
    / > < /
    Routes >
    <
    /BrowserRouter > ,
    document.getElementById('root')
);