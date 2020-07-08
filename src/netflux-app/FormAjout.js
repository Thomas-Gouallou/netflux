import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { DataService } from './DataService';
import './css/formAjout.css'

class FormAjout extends Component {

    render() {
        return (
            <section className="container form">
                <div className="row m-2 justify-content-center">
                    <select class="form-control col-10" name="category" onChange={this.setData}>
                        <option>--Categorie--</option>
                        <option>Film</option>
                        <option>Serie</option>
                    </select>
                </div>
                <div className="row m-2 justify-content-center">
                    <div className="col-10">Titre</div><br />
                    <input type="text" onChange={this.setData} name="title" className="col-10 form-control form" placeholder="Titre du film" />
                </div>
                <div className="row m-2 justify-content-center">
                    <div className="col-10">Durée</div><br />
                    <input type="time" onChange={this.setData} name="duration" className="col-10 form-control form" />
                </div>
                <div className="row m-2 justify-content-center">
                    <div className="col-10">Date de sortie</div><br />
                    <input type="date" onChange={this.setData} name="release" className="col-10 form-control form" />
                </div>
                <div className="row m-2 justify-content-center">
                    <div className="col-10">Descrption</div>
                    <textarea onChange={this.setData} name="description" rows="20" className="col-10 form-control form" placeholder="Description"></textarea>
                </div>
                <div className="row m-2 justify-content-center">
                <div className="col-10">Genre</div>
                    <select class="form-control col-10 selectpicker" multiple title="Genre" name="typeFilm" onChange={this.setData}>
                        <option>horreur</option>
                        <option>drama</option>
                        <option>comedie</option>
                        <option>aventure</option>
                        <option>...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="row m-2 justify-content-center">
                    <div className="col-10">
                        <input type='text' onChange={this.setData} className="col-10 form-control form" name="imageBig" placeholder="URL de l'image d'affiche" />
                    </div>
                </div>
                <div className="row m-2 justify-content-center">
                    <div className="col-10">
                        <input type='text' onChange={this.setData} className="col-10 form-control form" name="imageSmall" placeholder="URL de l'image de la page d'acceuil" />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <button onClick={this.confirm} className="col-2 btn btn-success form-control">Enregistrer</button>
                </div>
            </section>
        )
    }
}

export default withRouter(FormAjout)