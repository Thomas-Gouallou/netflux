import React, { Component } from "react"
import "./../css/slide.css"

class Slide extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={(this.props.index == this.props.indexActivation) ? 'slide-active col-10 text-center' : 'slide-noactive'}>
                <img src={this.props.image}></img>
            </div>
        )
    }
}

export default Slide