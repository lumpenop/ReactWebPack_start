import React, {Component} from 'react'
// React는 내부의 create element를 사용하기 위해 가져옴
import '../css/NavToggle.css'

class NavToggle extends Component{
    render(){
        return(
            <>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" onClick={()=>{this.props.toggle()}} />
                <label htmlFor="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </>
        )
    }
}


export default NavToggle