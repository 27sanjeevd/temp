import React, {Component} from 'react';
import './App.css';
import './website.css';
import Information from './components/information.js';
import Name from './components/name.js';
import Images from './components/image-table.js'
import Truth from './components/truth.js';
import {Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Information />} />
        <Route path='/name' element={<Name />} />
        <Route path='/images' element={<Images />} />
        <Route path='/truth' element={<Truth />} />
      </Routes>
    </>
  );
}