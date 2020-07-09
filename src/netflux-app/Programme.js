import React, { Component } from "react"
import {DataService} from "./DataService"
import {withRouter} from "react-router-dom"
import './css./image.css'

class Programme extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programme : DataService.programme
            // isFavoris : (DataService.favorisAnnonces.find(e => e.title == this.props.annonce.title) != undefined)
        }
    }

    redirectTo = () => {
        DataService.programme = this.props.programme
        this.props.history.push('/DetailProgramme')
    }
    
    // clickFavoris = () => {
    //     let tmpIsFavoris = !this.state.isFavoris
    //     this.setState({
    //         isFavoris : tmpIsFavoris
    //     })
    //     if(tmpIsFavoris) {
    //         DataService.favorisAnnonces.push(this.props.annonce)
    //     }
    //     else {
    //         DataService.favorisAnnonces = DataService.favorisAnnonces.filter(element => element.title != this.props.annonce.title)
    //     }
    // }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <img className="col" onClick={this.redirectTo}  src={this.props.programme.imageSmall}/>
                </div>
            </div>
        )
    }
}

export default withRouter(Programme)