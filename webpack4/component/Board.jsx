import React, {Component} from 'react'

class Board extends Component{

    render(){
        return(
            <>
                <h4 className="board-title">{this.props.title}</h4>
                <div className="board-div">
                    <table className="board-table">
                        <tbody className="board-tbody">
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Board