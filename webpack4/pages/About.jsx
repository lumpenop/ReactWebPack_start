import React, {Component} from 'react'
import '../css/About.css'
import Form from '../component/Form'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ConsultBoard from './ConsultBoard'
import {Link} from 'react-router-dom'
import BoardLink from '../component/BoardLink'

class About extends Component{

    render(){
        return(
            <>
   
                <BrowserRouter> {/* 최상위 엘리먼트 */}
                    {/* 내용이 들어가는 가변 영역 */}
                    <Switch>
                        <Route path="/about/board" component={ConsultBoard} />
                    </Switch>
                
                </BrowserRouter>
            </>
        )
    }
}

export default About