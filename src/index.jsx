import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
// const root = ReactDOM.createRoot(document.getElementById('root'));

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App/>);
