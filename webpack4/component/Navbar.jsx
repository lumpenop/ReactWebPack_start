import React,{Component} from 'react'
import '../css/Navbar.css'
import {FaFacebook,FaInstagram,FaTwitter,FaBars} from 'react-icons/fa'
import NavToggle from './NavToggle'

import {Link} from 'react-router-dom' // a태그 기능을 대체하는 a태그를 Link로 변경 후 herf를 to로 변경

class Navbar extends Component {
    state = {
        social:[
            {
                id:1,
                url:'https://www.twitter.com',
                icon:<FaTwitter />
            },
            {
                id:2,
                url:'https://www.facebook.com',
                icon:<FaFacebook />
            },
            {
                id:3,
                url:'https://www.instagram.com',
                icon:<FaInstagram />
            },
        ],

        menu:[
            {
                id:1,
                url:'/',
                text:'home'
            },
            {
                id:2,
                url:'/about',
                text:'about'
            },
            {
                id:3,
                url:'/projects',
                text:'projects'
            },
        ],
        
        showLinks:false,
        
    }

    showContainer=()=>{
        let className = this.state.showLinks ? 'links-container on' : 'links-container'
        return className
    }

    handleToggle = () => {
        this.setState({showLinks : !this.state.showLinks})
    }

    render(){
        return(
            <nav>
                <div className="nav-center">
                    {/* logo */}
                    
                    <div className="nav-header">
                        <h1 className="logo">Logo</h1>
                        <NavToggle toggle={this.handleToggle}/>
                        <button className="nav-toggle">
                            <FaBars />
                        </button>
                    </div>

                    {/* Navigation */}
                    <div className={this.showContainer()}>
                        <ul className="links">
                            {
                                this.state.menu.map(item=>{
                                    let {id,url,text} = item
                                    return (
                                        <li key={id}><Link to={url}>{text}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* social-icons */}
                    <ul className="social-icons">
                        {
                            this.state.social.map(item=>{
                                let { id,url,icon } = item
                                return(
                                    <li key={id}>
                                        <a herf={url}>{icon}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar