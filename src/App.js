import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';

import './App.css';
import { List } from './components/List';
import { AddItem } from './components/AddItem';


function App() {
  return (
   <div>
    <Header/>
    <Balance/>
    <IncomeExpense/>
    <List/>
    <AddItem/>
   </div>
  );
}

export default App;
