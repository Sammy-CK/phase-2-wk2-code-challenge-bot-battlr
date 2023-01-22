import React, {useEffect, useState} from 'react';
import '../../App.css';
import {Link, redirect} from 'react-router-dom';


function Botcolletion({ setArmyBots, armyBots, botcolletion, setBotcolletion, setBotspecsShown }){


    useEffect(() => {
     
        fetch('https://sammy-ck.github.io/db.json')
        .then(resp => resp.json())
        .then(data => {

            setBotcolletion(data.bots)
        

        
        
        
        })

    }, [])



    const shownBot = botcolletion.map((bot, index) =>  {
        return(
            
            <li className="botLi" key={'bot' + index} >
                <Link to='/botspecs' className='black' onClick={() => {
                
                setBotspecsShown(bot)

            }}>
                <img src={bot.avatar_url} style={{width: "70%"}} alt='' />
                <div style={{padding : "15px 0px 3px 0px",borderTop: "thin solid grey"}}>
                <h3 style={{textAlign:"left", paddingLeft:"10px"}}>{bot.name}</h3>
                <p style={{fontSize : "80%"}}>{bot.catchphrase}</p>
                <div><span><b>Health:</b> {bot.health}</span> <span><b>Amour:</b> {bot.armor}</span> <span><b>Damage:</b> {bot.damage}</span></div>
                </div>

                </Link>
                <button className='deleteBtn' onClick={() => {
                    
                    setArmyBots(armyBots.filter(armBott => armBott.id !== bot.id));
                    setBotcolletion(botcolletion.filter(bott => bott.id !== bot.id));
                    
                    }}>X</button>

            </li>


)
    })

    return (
            <div>
        <h1>CHOOSE YOUR BOTS</h1>
        <ul className='botUl'>
        {shownBot}
        </ul>
        </div>
    )
}

export default Botcolletion