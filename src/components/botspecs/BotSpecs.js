import React from 'react';
import {Link} from 'react-router-dom'



function BotSpecs({botSpecsShown, armyBots, setArmyBots, setBotspecsShown}){
    
    

        console.log("Army:",armyBots)
        console.log("newBot",botSpecsShown)

    


return(
    <div>


        <img src={botSpecsShown.avatar_url}/>
        <div>
            <h3>{botSpecsShown.name}</h3>
            <p>CATCHPHRASE: {botSpecsShown.catchphrase}</p>
            <p>CLASS: {botSpecsShown.bot_class}</p>
            <div><span><b>Health:</b> {botSpecsShown.health}</span> <span><b>Amour:</b> {botSpecsShown.armor}</span> <span><b>Damage:</b> {botSpecsShown.damage}</span></div>
        </div>



  <button>  <Link to='/'>Go Back</Link></button><br></br>


    <Link to='/' onClick={() => {

        setArmyBots( [...(armyBots.filter(armyBott => armyBott.id !== botSpecsShown.id)), botSpecsShown])  
        console.log(armyBots)      

    }
    }
    >Enlist</Link>

            </div>
)
}


export default BotSpecs