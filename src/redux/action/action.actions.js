import ActionActionTypes from './action.types'

export const addBet = bet => ({
    type:ActionActionTypes.ADD_BET,
    payload: bet
})