import React from 'react'
import SetLineup from '../../components/set-lineup/set-lineup.component'
import SelectFormat from '../../components/select-format/select-format.component'
import {connect} from 'react-redux'

import './set-lineup-container.styles.scss'

const SetLineUpContainer = ({formatSelected}) =>{
    console.log(formatSelected)


    return(
        <div className='set-lineup-container'>
        {formatSelected ? <SetLineup /> : <SelectFormat/>}
        </div>
    )
}

const mapStateToProps = (state)=>({
    formatSelected: state.lineup.formatSelected,
    userTeam: state.lineup.userTeam
  
  })
export default connect(mapStateToProps,null)(SetLineUpContainer)