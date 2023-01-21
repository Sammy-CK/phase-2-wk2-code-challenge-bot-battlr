import React, {useEffect, useState} from 'react';
import '../../App.css';


function Botcolletion(){
    const [botcolletion, setBotcolletion] = useState([]);

    useEffect(() => {
     
        fetch('https://sammy-ck.github.io/db.json')
        .then(resp => resp.json())
        .then(data => {

            setBotcolletion(data.bots)
        

        
        
        
        })

    }, [])



    const shownBot = botcolletion.map((bot, index) =>  {
        return(
            <li className="botLi" key={'bot' + index}>
                <img src={bot.avatar_url} style={{width: "70%"}} alt='' />
                <div style={{padding : "15px 0px",borderTop: "thin solid grey"}}>
                <h3 style={{textAlign:"left", paddingLeft:"10px"}}>{bot.name}</h3>
                <p style={{fontSize : "80%"}}>{bot.catchphrase}</p>
                <div><span><b>Health:</b> {bot.health}</span> <span><b>Amour:</b> {bot.armor}</span> <span><b>Damage:</b> {bot.damage}</span></div>
                </div>
            </li>
        )
    })

    console.log(botcolletion)



    return (
        <React.Fragment>
        <h1>Hello World</h1>
        <ul className='botUl'>
        {shownBot}
        </ul>
        </React.Fragment>
    )
}

export default Botcolletion