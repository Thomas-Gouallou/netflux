import React, { Component } from "react"
import Programme from './Programme'

class Series extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                {this.props.programmes.filter(a=> (a.category.includes(serie))).map((element) => {
                    return (
                        <Programme programme={element}></Programme>
                    )
                })}
            </div>
        )
    }
}

export default Series