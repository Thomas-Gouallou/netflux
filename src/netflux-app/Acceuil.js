import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { DataService } from './DataService';
import Series from './Series'
import Films from './Films'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';
import { ApiService } from './ApiService';

import CarouselProg from './Carousel';


class Acceuil extends Component {

    constructor(props) {
        super(props)
        this.state = {
            programmes: [],
        }
    }

    componentDidMount() {
        ApiService.get('programmes').then(response => {
            this.setState({
                programmes: response.data
            })
        })
    }

    

    render() {
        return (
            
            <main className="container-fluid">
                <div className='row'>
                    <CarouselProg></CarouselProg>
                </div>
                
                <div className="m-5"><h2>Séries</h2>
                    <Series programmes={this.state.programmes}></Series>
                </div>
                <div className="m-5"><h2>Films</h2>
                    <Films programmes={this.state.programmes}></Films>
                </div>
            </main>
        )
    }
}

export default Acceuil