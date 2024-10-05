import React from 'react'

//in contaners folder, ther is file name -containerIndex-, it helps us to import containers files like below
import { about, footer, header, skills, testimonial, work } from './containers/containerIndex.js';
import { navBar } from './components/componentsIndex.js';

export const App = () => {
  return (
    <div className='app'>
        <navBar />
        <header />
        <about />
        <work />
        <skills />
        <testimonial />
        <footer />
    </div>
  );
}

export default App;