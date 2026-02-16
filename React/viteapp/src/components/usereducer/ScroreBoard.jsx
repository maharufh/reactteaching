import React,{useReducer} from 'react'

const initialState = {
    playerA:0,
    playerB:0
};
function reducer(state, action){
    switch(action.type){
        case "INCREMENT_A":
            return {...state,playerA: state.playerA + 1};

            case "INCREMENT_B":
                return{ ...state,playerB: state.playerB + 1};

                case "RESET":
                    return initialState;

                    default:
                        return state;
    }
}
function ScroreBoard() {
    const [state,dispatch] = useReducer(reducer,initialState);

  return (
     <>
     <h1>Score Board</h1>
     <h2>Player A : {state.playerA}</h2>
     <h2>Player B : {state.playerB}</h2>

     <button onClick={() => dispatch({type:"INCREMENT_A"})}>
        Add Point A
     </button>
     <button onClick={() => dispatch({type:"INCREMENT_B"})}>
        Add Point B
     </button>
     
     <button onClick={() => dispatch({type:"RESET"})}>
       Reset
     </button>
     
     
     </>
  )
}

export default ScroreBoard