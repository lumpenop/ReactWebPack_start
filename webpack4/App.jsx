import React,{Component} from 'react'
import Navbar from './component/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'





class App extends Component{
    render(){
        return(
            <>
                <BrowserRouter> {/* 최상위 엘리먼트 */}
                    <Navbar />
                    {/* 내용이 들어가는 가변 영역 */}

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route exact path="/projects" component={Projects} />
                    </Switch>
                </BrowserRouter>

        
                
        
            </>
        )
    }
}

export default App
