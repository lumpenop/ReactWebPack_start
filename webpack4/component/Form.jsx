import React, {Component} from 'react'

class Form extends Component{
    render(){
        return(
            <>
                <div id="container">
                    <div id="content">
                        <form action="">
                            {this.props.children}
                        </form>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Form