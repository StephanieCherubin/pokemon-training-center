import React from 'react';
import './PageFooter.css'

function PageFooter() {
  var month = new Date();
  var date = new Date();
  var year = new Date();
  return(
    <div className="PageFooter">
      <footer>
        <h6>All content & design © Pokémon Database, {month.getMonth()+1}/{date.getDate()}/{date.getFullYear()}. Pokémon images & names © {month.getMonth()+1}/{date.getDate()}/{date.getFullYear()} Nintendo</h6>
      </footer>
    </div>
  )
}

export default PageFooter;
