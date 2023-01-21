import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Botcolletion from './components/botcolletction/botcollection';
import Yourbotarmy from './components/yourbotarmy/yourbotarmy';


function App() {

  const [botcolletion, setBotcolletion] = useState([]);
    const [armyBots, setArmyBots] = useState([])


  return (
    <div className="App">
      <Yourbotarmy  armyBots={armyBots} setArmyBots={setArmyBots} />
      <Botcolletion setArmyBots={setArmyBots} armyBots={armyBots} botcolletion={botcolletion} setBotcolletion={setBotcolletion}/>
    </div>
  );
}

export default App;
