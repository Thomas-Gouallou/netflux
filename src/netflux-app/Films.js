import React, { Component } from "react"
import Programme from './Programme'
import { DataService } from './DataService';

class Films extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                {this.props.programmes.filter(a=> (a.category=="film")).map((element) => {
                    return (
                        <Programme programme={element}></Programme>
                    )
                })}
            </div>
        )
    }
}

export default Films