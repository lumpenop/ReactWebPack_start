import React , {Component} from 'react'
import {Link} from 'react-router-dom'

class BoardLink extends Component{
    state = {
        menu:[
            {
                id:1,
                url:'/about/board',
                text:'상담게시판'
            },
        ],
    }
    render(){
        return(
            <>
                {
                    this.state.menu.map(item=>{
                        let {id,url,text} = item
                        return (
                            <li key={id}><Link to={url}>{text}</Link></li>
                        )
                    })
                }
            </>
        )
    }
}

export default BoardLink