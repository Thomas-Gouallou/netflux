import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { DataService } from './DataService';
import Series from './Series'
import Films from './Films'
import Carousel from './carousel/Carousel'

class Acceuil extends Component {

    constructor(props) {
        super(props)
        this.state = {
            programmes: DataService.programmes
        }
    }
    
    render() {
        return (
            <main>
                <Carousel></Carousel>
                <Series programmes={this.state.programmes}></Series>
                <Films programmes={this.state.programmes}></Films>
            </main>
        )
    }
}

export default withRouter(Acceuil)