import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AlumnInfo from './components/alumnInfo';
import Pokemons from './components/pokemons';
import { Layout } from './components/Layout';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


ReactDOM.render( <
    BrowserRouter > <
    Routes > <
    Route path = '/'
    element = { < Layout / > } >
    <
    Route path = 'pokemons'
    element = { <
        App / >
    }
    /><
    Route path = 'pokemonInfo'
    element = { < Pokemons / > }
    / > <
    Route path = 'Matricula'
    element = { < AlumnInfo / > }
    / > <
    Route path = '*'
    element = { < Navigate replace to = '/' / > }
    / > </Route > < /
    Routes >
    <
    /BrowserRouter > ,
    document.getElementById('root')
);