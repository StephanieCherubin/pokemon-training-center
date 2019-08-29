import React from 'react';
import Project from './Project';
import './PageContent.css'

function PageContent() {
  return(
    <div className="PageContent">
      <Project title="Pikachu" image="/images/pikachu.png" link="/" />
      <Project title="Bulbasaur" image="/images/bulbasaur.jpeg" link="/" />
      <Project title="Charmander" image="/images/charmander.png" link="/" />
      <Project title="Cyndaquil" image="/images/cyndaquil.png" link="/" />
      <Project title="Chikorita" image="/images/chikorita.jpeg" link="/" />
      <Project title="Caterpie" image="/images/caterpie.png" link="/" />
      <Project title="Jolteon" image="/images/jolteon.png" link="/" />
      <Project title="Eevee" image="/images/eevee.png" link="/" />
      <Project title="Squirtle" image="/images/squirtle.jpeg" link="/" />
    </div>
  )
}

export default PageContent