import React, { useEffect } from 'react'
import Board from './Board'
import Styled from 'styled-components'

const GameDiv = Styled.div`
    display:flex;
    flex-wrap:wrap;
    align-item:center;
    justify-content:center;
    width:300px;
`

const redu = (state, action) => {
    switch(action.type){
        case "NEXT":
            const {squares} = {...state}
            squares[action.index] = state.XisNext ? 'O' : 'X'
            return{
                ...state,
                XisNext:!state.XisNext,
                squares
            }
        case "WIN":
            return{...state,
                winner:action.winner
            }
            
    }
}

const defaultState = {
    squares:Array(9).fill(null),
    XisNext:true,
    winner:null,
}

const Winner = (squares) =>{
    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(var i =0; i<lines.length; i++){
        const [a,b,c] = lines[i]
        if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
            return squares[a]
        }
    }
    return null
}

const Game = () => {
    const [state, dispatch] = React.useReducer(redu, defaultState)
    const handleClick = (n) =>{
        if(state.squares[n]) return
        if(state.winner !== null) return
        dispatch({type:"NEXT", index: n})
        console.log(n)
    }
    useEffect(()=>{
        const win = Winner(state.squares)
        if(win !== null){
            dispatch({type:'WIN', winner:win})
        }

    },[state.XisNext])
    return(
        <>
            <GameDiv>
                <Board 
                    squares={state.squares}
                    onClick={handleClick}
                />
            </GameDiv>
            {state.winner ? `${state.winner} 승리` : `Next Player : ${state.XisNext ? 'O' : 'X'}`}
        </>
    )
}

export default Game