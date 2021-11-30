import React from 'react';
import { connect } from "react-redux";
import './bet-slip.styles.scss'

const BetSlip = ({betSlip}) =>{
    return (
        <div className='bet-slip'>
        <div className = 'bet-slip-header'>
        <div className = 'bet-slip-count-container'>
        <span id = 'bet-slip-count' >{betSlip.length}</span>
        </div>
        <div className = 'bet-slip-header-and-i'>
        
        <h2 style={{marginRight:'4px'}}>BET SLIP</h2> 
        <span className='i-logo-bet-slip'><svg role="img" aria-labelledby="title" class="sportsbook__icon--tool-tip-outlined" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Tooltip icon representing more supplementary information is present</title><rect class="sportsbook__icon--tool-tip-outlined" x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="black"></rect><path class="sportsbook__icon--tool-tip-outlined i" d="M7.13086 12H8.85938V6.56543H7.13086V12ZM7.99512 5.83789C8.49805 5.83789 8.91309 5.44238 8.91309 4.93945C8.91309 4.43652 8.49805 4.03613 7.99512 4.03613C7.49219 4.03613 7.07715 4.43652 7.07715 4.93945C7.07715 5.44238 7.49219 5.83789 7.99512 5.83789Z" fill="black"></path></svg></span>
        </div>
        <span className = 'clear-bet-slip'>Clear Bet Slip</span>
       <span id = 'up-arrow-bet-slip'> <svg role="img" aria-label="Arrow pointing up icon" class="sportsbook__icon--arrow-up" fill="#000000" width="26" height="26" viewBox="0 0 32 32"><path d="M16.032 6.144h-0.032l-14.624 14.656c-0.384 0.384-0.384 0.992 0 1.344l1.504 1.504c0.384 0.384 0.992 0.384 1.344 0l11.776-11.776h0.032l11.776 11.776c0.384 0.384 0.992 0.384 1.344 0l1.504-1.504c0.384-0.384 0.384-0.992 0-1.344l-14.624-14.656z"></path></svg></span>
      

       </div>
           <div className='bets'> {betSlip.map(ele=>ele.id + ele.type+" ")}</div>

        </div>
    )
}

const mapStateToProps = state =>({
    betSlip:state.action.slip

})
const matDispatchToProps = state =>({

})
export default connect(mapStateToProps, matDispatchToProps)(BetSlip)