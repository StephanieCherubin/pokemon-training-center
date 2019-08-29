import React from 'react';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import './App.css';
import PageFooter from './PageFooter';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageContent />
      <PageFooter />
    </div>
  );
}

export default App;
