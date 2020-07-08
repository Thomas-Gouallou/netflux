import React, { Component } from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./Header.js"
import Footer from "./Footer"
import FormAjout from "./FormAjout.js"

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
                <FormAjout></FormAjout>
                <Footer></Footer>
            </BrowserRouter>
        )
    }
}