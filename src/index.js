import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Routings from './routes/Routings';
import './App.css';
import MyProvider from './context/MyProvider';

const root = ReactDOMClient.createRoot(document.querySelector('#root'))

root.render(<MyProvider><Routings /></MyProvider>);


