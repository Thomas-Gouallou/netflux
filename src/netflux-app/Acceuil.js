import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { DataService } from './DataService';
import Programme from './Programme'
import Series from './Series'
import Films from './Films'


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
        )
    }
}

export default withRouter(Acceuil)