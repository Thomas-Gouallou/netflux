import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { DataService } from './DataService';
import './css/footer.css'


class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <hr/>
                <div className="row">
                <div className="col-2">
                    <button className="fa fa-facebook-square"></button>
                    <button className="fa fa-twitter-square"></button>
                    <button className="fa fa-instagram"></button>
                    <button className="fa fa-youtube"></button>
                </div>
                <div className="col-3">
                    &copy; Tomu, Elena, Thomas
                </div>
                </div>
            </footer>
        )
    }
}

export default withRouter(Footer)