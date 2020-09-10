import React,{Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";



class Compte extends Component{


    render(){
        return (
        <div className="container-fluid">
            <div className="card">
                <h2 className='card-header'>Se connecter</h2>
                <div className='card-body'>
                    <h3 className='card-title'>Email :</h3>
                    <input type='email' name='email' palceholder='Entrez votre email'></input>
                    <h3 className='card-title'>Mot de passe :</h3>
                    <input className="row" type='password' name='motdepasse' minlenght='8' placeholder='Entrez votre mot de passe'></input>
                    <input className="btn btn-light" type="submit" value="Valider"></input>
                </div>
            </div>


        </div>
        )
    }
}

export default Compte