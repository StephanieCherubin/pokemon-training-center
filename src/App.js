import React from 'react';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import './App.css';
import PageFooter from './PageFooter';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageContent />
      <Footer />
      <PageFooter />
    </div>
  );
}

export default App;
