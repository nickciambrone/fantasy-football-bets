import ActionActionTypes from './action.types'

const INITIAL_STATE={
    slip:[]
}

const actionReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case ActionActionTypes.ADD_BET:
            console.log(action.payload)
        return {
          ...state,slip:[...state.slip, action.payload]
         
      }
      default: return state;

    }


}

export default actionReducer;