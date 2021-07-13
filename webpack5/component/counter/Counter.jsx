import React from 'react'
import reducer from './reducer'

const Counter = () => {
    
    const [number, dispatch] = React.useReducer(reducer, 0)

}