import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { DataService } from './DataService';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <button style="font-size:24px">&#xf082;</button>
                    <button style="font-size:24px">&#xf081;</button>
                    <button style="font-size:24px">&#xf16d;</button>
                    <button style="font-size:24px">&#xf16a;</button>
                </div>
                <div>
                    &copy; Tomu, Elena, Thomas
                </div>
            </footer>
        )
    }
}

export default withRouter(Footer)