import React from 'react';
import './rosters.styles.scss';
import {connect} from 'react-redux'
import {dropPlayer} from '../../redux/lineup/lineup.actions'

 const Rosters = ({team, userTeam, opponentTeam, dropPlayer}) =>{
    // console.log(userTeam['QB']['name'])
    return (
        // <div className='rosters'>
        // <table id='roster'>
        // <tr>
        // <th>Position</th><th>Player</th></tr>
        //     {team==='user' ? 
        //     Object.keys(userTeam).map(ele=><tr><td>{ele}</td><td><div className='player-slot'>{userTeam[ele]['name']} {userTeam[ele]['name']=='' ? '-' :  <span onClick={()=>dropPlayer(userTeam[ele]['name'],userTeam[ele]['name'])} className='drop-player'>&#10006;</span>}</div></td></tr>) : 
        //     Object.keys(opponentTeam).map(ele=><tr><td>{ele}</td><td>{opponentTeam[ele]['name']} {opponentTeam[ele]['name']=='' ? '-' :  
    //    }</td></tr>)}
        // </table>
        // </div>
        <div className='rosters'>
        <table id='roster'>
        <tr>
        <th>Position</th><th>Player</th></tr>
            {team==='user' ? 
            Object.keys(userTeam).map(ele=><tr><td>{ele}</td><td><div className='player-slot'>{userTeam[ele]['name']} {userTeam[ele]['name']=='' ? '-' :  <span onClick={()=>dropPlayer(userTeam[ele]['name'], ele)} className='drop-player'>&#10006;</span>}</div></td></tr>) : 
            Object.keys(opponentTeam).map(ele=><tr><td>{ele}</td><td>{opponentTeam[ele]['name']} {opponentTeam[ele]['name']=='' ? '-' :   <span onClick={()=>dropPlayer(opponentTeam[ele]['name'], ele)} className='drop-player'>&#10006;</span>}</td></tr>)}
        </table>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    dropPlayer: (player,position)=>dispatch(dropPlayer({player,position}))


})
const mapStateToProps = state =>({
    userTeam: state.lineup.userTeam,
    opponentTeam: state.lineup.opponentTeam

  })
export default connect(mapStateToProps,mapDispatchToProps)(Rosters);