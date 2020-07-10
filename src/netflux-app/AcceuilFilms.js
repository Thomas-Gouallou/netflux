import React, { Component } from "react"
import Programme from './Programme'
import { DataService } from './DataService';
import './css/acceuilFilmsSeries.css'
import { ApiService } from './ApiService';

class AcceuilFilms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programmes: DataService.programmes
        }
    }

    componentDidMount() {
        
        ApiService.get('programmes').then(response => {
            this.setState({
                programmes : response.data
            })
        })
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