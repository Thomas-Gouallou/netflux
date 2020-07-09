import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { DataService } from './DataService';
import Programme from './Programme'
import Series from './Series'
import Films from './Films'

<<<<<<< HEAD

class Acceuil extends Component {

    constructor(props) {
        super(props)
        this.state = {
            programmes: []
        }
    }

    
    render() {
        return (
            <main>
                <Programme></Programme>
                <Series></Series>
                <Films></Films>
            </main>
=======
class Acceuil extends Component {
    render() {
        return(
<div> Blablabla</div>
>>>>>>> dffa5556418d5e052fc9fae4cff92d3a5c513f1e
        )
    }
}

export default withRouter(Acceuil)