import React from 'react';
import Pill from '../pill/pill.component'
import  CardList  from "../card-list/card-list.component";
import {SearchBox} from "../search-box/search-box.component.jsx";
import CustomButton  from "../custom-button/custom-button.component.jsx";
import { Link } from 'react-router-dom';
import './player-options.styles.scss';
import { connect } from 'react-redux';


const PlayerOptions = ({filteredPlayers, addPlayer, positions, positionSelected, handlePositionChange, handleChange, teamsFull}) => {
   return (
    <div className="player-options">
    <div className = 'view-lines-button-container' style={{height:'45px'}}>
    {teamsFull=='true' ?<Link to='/view-lines'> <button className = 'view-lines-button'>View Lines</button></Link> : ''}
    </div>


    <div className = 'player-options-content'>
    <div className = 'player-options-top'>
     <Pill items={positions} selectedItem={positionSelected} />
     <SearchBox
     placeholder="Search Player"
     handleChange={handleChange}
   />
   </div>
     <CardList players={filteredPlayers} />
     </div>
   </div>
   )
}

const mapStateToProps = (state)=>({

  teamsFull:state.lineup.teamsFull


})

export default connect(mapStateToProps)(PlayerOptions)