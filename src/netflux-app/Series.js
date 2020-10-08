import React, { Component } from "react"
import Programme from './Programme'
import {DataService} from "./DataService"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { ApiService } from './ApiService';


class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programme : DataService.programme
            
        }
    }

    render() {
        return (
            
            <Carousel
            arrows
            >
            <div className="row">
                {this.props.programmes.filter(a=> (a.category=="serie") && (a.id<='5')).map((element, index) => {
                    return (
                        <Programme key={index} programme={element}></Programme>
                    )
                })}
            </div>
            <div className="row">
                {this.props.programmes.filter(a=> (a.category=="serie") && (a.id>'5' && a.id <='10')).map((element, index) => {
                    return (
                        <Programme key={index} programme={element}></Programme>
                    )
                })}
            </div>
            <div className="row">
                {this.props.programmes.filter(a=> (a.category=="serie") && (a.id>'10' && a.id <='15')).map((element, index) => {
                    return (
                        <Programme key={index} programme={element}></Programme>
                    )
                })}
            </div>
            </Carousel>
            
            
        )
    }
}

export default Series