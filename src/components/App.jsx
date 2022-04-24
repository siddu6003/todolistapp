import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import AddNote from './AddNote';
import './styles.css'
import notes from './notes';

function App() {
  return (
    <div className="App">
      <Header />
      <AddNote />
      <Footer />
    </div>
  );
}

export default App;
