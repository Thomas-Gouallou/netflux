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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={this.props.programme.image}/>
                    </div>
                    <div className="col">
                        <div className="row">
                            Titre : {this.props.programme.title}
                        </div>
                        <div className="row">
                            Note : {this.props.programme.rating}
                        </div>
                        <div className="row">
                            Durée : {this.props.programme.duration}
                        </div>
                        <div className="row">
                            Date de sortie : {this.props.programme.release}
                        </div>
                        <div className="row">
                            Description : {this.props.programme.description}
                        </div>
                        <div className="row">
                            Genre : {this.props.programme.typeFilm}
                        </div>
                        <div className="row">
                            Casting :
                            <div className="col">
                                <img src={this.props.programme.castingImage[0]}/>
                                {this.props.programme.castingNom[0]}
                            </div>
                            <div className="col">
                                <img src={this.props.programme.castingImage[1]}/>
                                {this.props.programme.castingNom[1]}
                            </div>
                            <div className="col">
                                <img src={this.props.programme.castingImage[2]}/>
                                {this.props.programme.castingNom[2]}
                            </div>
                            <div className="col">
                                <img src={this.props.programme.castingImage[3]}/>
                                {this.props.programme.castingNom[3]}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default DetailProgramme