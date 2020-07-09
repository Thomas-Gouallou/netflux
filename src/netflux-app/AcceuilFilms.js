import React, { Component } from "react"
import Programme from './Programme'
import { DataService } from './DataService';
import './css/acceuilFilmsSeries.css'

class AcceuilFilms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programmes: DataService.programmes
        }
    }

    render() {
        return (
            <div className="container">
                <h2>Films</h2>
                {this.state.programmes.filter(a => (a.category == "film")).map((element) => {
                    return (
                        <Programme programme={element}></Programme>
                    )
                })}
            </div>
        )
    }

}

export default AcceuilFilms