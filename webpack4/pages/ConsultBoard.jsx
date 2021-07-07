import React, {Component} from 'react'
import Board from '../component/Board'
import Consulting from '../component/consulting'
import Privacy from '../component/Privacy'
import Form from '../component/Form'
import BoardLink from '../component/BoardLink'


class ConsultBoard extends Component{
    render(){
        return(
            <>
            <span className='about'>Hello About</span>

            <div id="container">
                <ul id="content">
                <BoardLink />
                <Form>
                    <Board title="개인정보취급방침">
                        <Privacy />
                    </Board>
                    <Board title="상담정보">
                        <Consulting />
                    </Board>
                </Form>
                </ul>
            </div>
                
            </>
        )
    }
}

export default ConsultBoard