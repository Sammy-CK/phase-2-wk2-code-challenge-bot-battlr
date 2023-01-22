import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Botcolletion from './components/botcolletction/botcollection';
import Yourbotarmy from './components/yourbotarmy/yourbotarmy';
import BotSpecs from './components/botspecs/BotSpecs'


function App() {

  const [botcolletion, setBotcolletion] = useState([]);
    const [armyBots, setArmyBots] = useState([])
    const [botSpecsShown, setBotspecsShown] = useState({})

  return (
    <div className="App">
      
      <header>Bot Battlr</header>
      <Yourbotarmy  armyBots={armyBots} setArmyBots={setArmyBots} />
        <Routes>
          
          <Route exact path='/' element={<Botcolletion setBotspecsShown={setBotspecsShown} setArmyBots={setArmyBots} armyBots={armyBots} botcolletion={botcolletion} setBotcolletion={setBotcolletion}/>}/>
          <Route exact path='/botspecs' element={<BotSpecs botSpecsShown={botSpecsShown} setArmyBots={setArmyBots} armyBots={armyBots}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
