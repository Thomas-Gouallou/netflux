import React,{Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";



class Compte extends Component{
    constructor(props){
        super(props)
    }



    redirectTo = () =>{
        this.props.history.push('/')
    }

    render(){
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4"></div>
                <div className="card col-3 bg-secondary" id="connect">
                    <h2 className='card-header row'>Se connecter</h2>
                    <div className='card-body'>
                        <h3 className='card-title row'>Email :</h3>
                        <input className="row" type='email' name='email' palceholder='Entrez votre email'></input>
                        <h3 className='card-title row'>Mot de passe :</h3>
                        <input className="row" type='password' name='motdepasse' minlenght='8' placeholder='Entrez votre mot de passe'></input>
                        <a href="/Acceuil"><input className="btn btn-light row" type="submit" ></input></a>
                        <a href='/CreationCompte' className='row text-dark'>Pas encore de compte? Réglez ça ici!</a>
                        <a href='/Perdu' className='row text-dark' >Mot de passe perdu?</a>
                    </div>

                </div>
            </div>
            


        </div>
        )
    }
}

export default Compte