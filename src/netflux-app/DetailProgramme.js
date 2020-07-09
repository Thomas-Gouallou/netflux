import  React, {Component } from 'react';
import { DataService } from './DataService';

class DetailProgramme extends Component{
    constructor(props){
        super(props)
        this.state = {
            programme : DataService.programme
        }
    
    }
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img width="500px" height="800px" src={this.state.programme.imageBig}/>
                    </div>
                    <div className="col-8">
                        <div className="row text-white">
                            Titre : {this.state.programme.title}
                        </div>
                        <div className="row text-white">
                            Note : {this.state.programme.rating}
                        </div>
                        <div className="row text-white">
                            Durée : {this.state.programme.duration} minutes
                        </div>
                        <div className="row text-white">
                            Date de sortie : {this.state.programme.release}
                        </div>
                        <div className="row text-white">
                            Description : {this.state.programme.description}
                        </div>
                        <div className="row text-white">
                            Genre : {this.state.programme.typeFilm}
                        </div>
                        <div className="row text-white">
                            Casting :
                            <div className="col-2">
                                <img width="200px" height="200px" src={this.state.programme.castingImage[0]}/>
                                {this.state.programme.castingNom[0]}
                            </div>
                            <div className="col-2">
                                <img width="200px" height="200px" src={this.state.programme.castingImage[1]}/>
                                {this.state.programme.castingNom[1]}
                            </div>
                            <div className="col-2">
                                <img width="200px" height="200px" src={this.state.programme.castingImage[2]}/>
                                {this.state.programme.castingNom[2]}
                            </div>
                            <div className="col-2">
                                <img width="200px" height="200px" src={this.state.programme.castingImage[3]}/>
                                {this.state.programme.castingNom[3]}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default DetailProgramme