import React, { Component } from "react"
import Programme from './Programme'
import { DataService } from './DataService';
import './css/acceuilFilmsSeries.css'

class AcceuilSeries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programmes: DataService.programmes
        }
    }

    filtre=(categ)=> {
        let ligne = []
        this.state.programmes.filter(a => (a.category == "serie") && (a.typeFilm.includes(categ))).map((element) => {
            ligne.push(<div>
                {categ}
                <Programme programme={element}></Programme>
            </div>)
        })
    }

    render() {
        return (
            <section className="container">
                <h2 className="text-center">Séries</h2>

                {/* {for (let i=0; i<DataService.categories.length; i++) {

                }} */}

                {()=>{this.filtre("Aventure")}}
                {this.filtre("Comédie")}
                {this.filtre("Fantastique")}
{}
                {/* <div>
                    Aventures :
                {this.state.programmes.filter(a => (a.category == "serie") && (a.typeFilm.includes("aventure"))).map((element) => {
                    return (
                        <Programme programme={element}></Programme>
                    )
                })}
                </div>
                <div>
                    Comédies :
                {this.state.programmes.filter(a => (a.category == "serie") && (a.typeFilm.includes("comedie"))).map((element) => {
                    return (
                        <Programme programme={element}></Programme>
                    )
                })}
                </div>
                <div>
                    Fantastique :
                {this.state.programmes.filter(a => (a.category == "serie") && (a.typeFilm.includes("fantastique"))).map((element) => {
                    return (
                        <Programme programme={element}></Programme>
                    )
                })}
                </div> */}
            </section>
        )
    }
}

export default AcceuilSeries