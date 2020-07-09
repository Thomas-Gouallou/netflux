import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { DataService } from './DataService';
import './css/formAjout.css'

class FormAjout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ligneSeries: [],
            castingImage: [],
            castingName: [],
            placeholderTitre: "Titre"
        }
    }

    setData = (e) => {
        DataService.programme[e.target.name] = e.target.value
        DataService.programme.id = DataService.programmes.length + 1
    }

    // setTypeFilm = (e) => {

    // }

    confirm = () => {
        DataService.programme.castingImage = this.state.castingImage
        DataService.programme.castingNom = this.state.castingName
        DataService.programmes.push(DataService.programme)
        DataService.programme = {
            category: "",
            id: 0,
            imageBig: "",
            imageSmall: "",
            title: "",
            rating: 0,
            duration: 0,
            release: "",
            description: "",
            typeFilm: [],
            castingImage: [],
            castingNom: [],
            nbrSaisons: 0,
            nbrEpisodes: 0
        }
        this.props.history.push('./')
    }

    switchFilmSerie = (e) => {
        let ligneSerie = []
        if (e.target.value == "serie") {
            ligneSerie.push(<div className="row m-2 justify-content-around">
                <div className="col-5">
                    <div>Nombre d'épisodes</div>
                    <input type="number" onChange={this.setData} name="nbrEpisodes" className="col-10 form-control form" />
                </div>
                <div className="col-5">
                    <div>Nombre de saisons</div>
                    <input type="number" onChange={this.setData} name="nbrSaisons" className="col-10 form-control form" />
                </div>
            </div>)
            DataService.programme.category="serie"
            this.setState({
                ligneSeries: ligneSerie,
                placeholderTitre: "Titre de la série"
            })
        }
        else {
            DataService.programme.category="film"
            this.setState({
                ligneSeries: [],
                placeholderTitre: "Titre du film"
            })
            if(e.target.value != "film" && e.target.value != "serie") {
                DataService.programme.category=""
                this.setState({
                    ligneSeries: [],
                    placeholderTitre: "Titre"
                })
            }
        }
    }
    setCastingImage = (e) => {
        DataService.programme.castingImage[e.target.name] = e.target.value
    }

    setCastingNom = (e) => {
        DataService.programme.castingNom[e.target.name] = e.target.value
    }

    setTypeFilm = (e) => {
        DataService.programme.typeFilm.push(e.target.value)
    }

    render() {
        return (
            <section className="container form">
                <nav className="row">
                    <article className="col-10">
                        <div className="row m-2 justify-content-center">
                            <div className="col-8">
                                <div>Titre</div>
                                <input type="text" onChange={this.setData} name="title" className="col-10 form-control form" placeholder={this.state.placeholderTitre} />
                            </div>
                            <div className="col-3"><br/>
                                <select class="form-control" name="category" onChange={this.switchFilmSerie}>
                                    <option>--Categorie--</option>
                                    <option value="film">Film</option>
                                    <option value="serie">Série</option>
                                </select>
                            </div>
                        </div>
                        <div className="row m-2 justify-content-center">
                            <div className="col-3">
                                <div>Durée</div>
                                <input type="number" onChange={this.setData} name="duration" className="col-10 form-control form" />
                            </div>
                            <div className="col-3">
                                <div>Date de sortie</div>
                                <input type="date" onChange={this.setData} name="release" className="col-10 form-control form" />
                            </div>
                            <div className="col-3">
                                <div>Note</div>
                                <input type="number" onChange={this.setData} name="rating" className="col-10 form-control form" />
                            </div>
                            {this.state.ligneSeries}
                        </div>
                        <div className="row m-2 justify-content-center">
                            <div className="col-10">Descrption</div>
                            <textarea onChange={this.setData} name="description" rows="15" className="col-10 form-control form" placeholder="Description"></textarea>
                        </div><br />
                        <div className="text-center">Casting</div>
                        <div className="row m-2 justify-content-center">
                            <div className="col-3">
                                <input type='text' onChange={this.setCastingNom} className="form-control form m-1" name="1" placeholder="Prénom Nom" />
                                <input type='text' onChange={this.setCastingImage} className="form-control form m-1" name="1" placeholder="URL de l'image" />
                            </div>
                            <div className="col-3">
                                <input type='text' onChange={this.setCastingNom} className="form-control form m-1" name="2" placeholder="Prénom Nom" />
                                <input type='text' onChange={this.setCastingImage} className="form-control form m-1" name="2" placeholder="URL de l'image" />
                            </div>

                            <div className="col-3">
                                <input type='text' onChange={this.setCastingNom} className="form-control form m-1" name="3" placeholder="Prénom Nom" />
                                <input type='text' onChange={this.setCastingImage} className="form-control form m-1" name="3" placeholder="URL de l'image" />
                            </div>
                            <div className="col-3">
                                <input type='text' onChange={this.setCastingNom} className="form-control form m-1" name="4" placeholder="Prénom Nom" />
                                <input type='text' onChange={this.setCastingImage} className="form-control form m-1" name="4" placeholder="URL de l'image" />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <button onClick={this.confirm} className="btn col-8 btn-success form-control m-2 confirm">Enregistrer</button>
                        </div>
                    </article>
                    <aside className="col-2">
                        <div>Genre</div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="horreur" />Horreur</label></div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="drame" />Drame</label></div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="comedie" />Comédie</label></div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="aventure" />Aventure</label></div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="romance" />Romance</label></div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="fantastique" />Fantastique</label></div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="action" />Action</label></div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="historique" />Historique</label></div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="thriller" />Thriller</label></div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="science-fiction" />Science-fiction</label></div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="catastrophe" />Catastrophe</label></div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="western" />Western</label></div>
                        <div><label class="checkbox-inline"><input onChange={this.setTypeFilm} type="checkbox" value="policier" />Policier</label></div><br/>

                        <div>L'image d'affiche
                        <input type='text' onChange={this.setData} className="form-control form" name="imageBig" placeholder="URL de l'image" /></div><br />
                        <div>L'image d'acceuil
                        <input type='text' onChange={this.setData} className="form-control form" name="imageSmall" placeholder="URL de l'image" /></div>
                    </aside>
                </nav>

            </section>
        )
    }
}

export default withRouter(FormAjout)