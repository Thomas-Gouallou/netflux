import React, { Component } from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./Header.js"
import Footer from "./Footer"
import FormAjout from "./FormAjout"
import Acceuil from "./Acceuil.js"
import DetailProgramme from './DetailProgramme';

export class NetfluxNav extends Component {

    render() {
        return(
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route path='/' exact>
                        <Acceuil></Acceuil>
                    </Route>
                    <Route path='/Form' exact>
                        <FormAjout></FormAjout>
                    </Route>
                    <Route path='/DetailProgramme' exact>
                        <DetailProgramme></DetailProgramme>
                    </Route>            
                </Switch>
                <Footer></Footer>
            </BrowserRouter>
        )
    }
}