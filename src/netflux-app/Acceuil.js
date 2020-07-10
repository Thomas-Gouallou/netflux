import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { DataService } from './DataService';
import Series from './Series'
import Films from './Films'
import Carousel from './carousel/Carousel'


import { ApiService } from './ApiService';




class Acceuil extends Component {

    constructor(props) {
        super(props)
        this.state = {
            programmes: DataService.programmes
        }
    }
    
    componentDidMount() {
        // console.log(this.props.favoris)
        // this.setState({
        //     annonces : (this.props.favoris != undefined && this.props.favoris == true) ? DataService.favorisAnnonces : DataService.annonces
        // })
        // axios.get('http://localhost:80/annonces').then(response=> {
        //     console.log(response)
        //     const res = response.data
        //     this.setState({
        //         annonces : res
        //     })
        // })
        ApiService.get('programmes').then(response => {
            this.setState({
                programmes : response.data
            })
        })
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