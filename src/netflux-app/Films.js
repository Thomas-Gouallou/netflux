import React, { Component } from "react"
import Programme from './Programme'
import { DataService } from './DataService';
import { ApiService } from './ApiService';

class Films extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="row">
                {this.props.programmes.filter(a => (a.category == "film")).map((element, index) => {
                    return (
                        <Programme key={index} programme={element}></Programme>
                    )
                })}
            </div>
        )
    }
}

export default Films