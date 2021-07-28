import React from 'react';
import './App.scss';
import Contacts from './components/constacts/contacts';
import Description from './components/description/description';
import Navigation from './components/nav/navigation';
import Projects from './components/projects/projects';

function App() {
  return (
    <div>
     <Navigation/>
     <section className='background'>
        <Description />
      </section>
      <section className='background-2'>
        <Projects/>
      </section>
      <section className='background'>
        <Contacts />
      </section>


</div>
  );
}

export default App;
