import react from 'react';
import ReactDOM from 'react-dom/client'; //this will connect the html 

import App from './App.js';
import './index.css';

// ReactDOM.render(<App/>,document.getElementById('root'));



// Get the root DOM element
const rootElement = document.getElementById('root');

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(<App />);