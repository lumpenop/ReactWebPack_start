import React from 'react'
import {LayoutContext} from './LayoutContext'
import LayoutStore from './LayoutContext'
const Layout = () => {
    return(
        <>
            <LayoutStore>
                <LoginBox />
            </LayoutStore>
        </>
    )
}

const LoginBox = () =>{
    return (
        <>
            <Login />
        </>
    )
}


const Login = () => {
    return(

        <>
            <Button />
        </>
    )
}


const Button = () => {
    const context = React.useContext(LayoutContext) // 모든 컴포넌트에서 value="hi" 를 사용가능
    return(
        <>
            <button>{context}</button>
        </>
    )
}

export default Layout

