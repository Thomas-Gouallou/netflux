import React, { Component } from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./Header.js"

export class NetfluxNav extends Component {

    render() {
        return(
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route path='/' exact>
                        <></>
                    </Route>
                    <Route  >
                        <></>
                    </Route>
                    <Route >
                        < ></>
                    </Route>
                    <Route >
                        <></>
                    </Route><Route >
                        <></>
                    </Route>
                </Switch>
                <></>
            </BrowserRouter>
        )
    }
}