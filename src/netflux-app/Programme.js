import { React, Component } from 'react';

class Programme extends Component{
    constructor(props)
    super(props){

    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={this.props.programmes.image}/>
                    </div>
                    <div className="col">
                        <div className="row">
                            Titre : {this.props.programmes.title}
                        </div>
                        <div className="row">
                            Note : {this.props.programmes.rating}
                        </div>
                        <div className="row">
                            Durée : {this.props.programmes.duration}
                        </div>
                        <div className="row">
                            Date de sortie : {this.props.programmes.release}
                        </div>
                        <div className="row">
                            Description : {this.props.programmes.description}
                        </div>
                        <div className="row">
                            Genre : {this.props.programmes.typeFilm}
                        </div>
                        <div className="row">
                            Casting :
                            <div className="col">
                                {this.props.programmes.castingImage[image[0]]}
                                {this.props.programmes.castingNom[nom[0]]}
                            </div>
                            <div className="col">
                                {this.props.programmes.castingImage[image[1]]}
                                {this.props.programmes.castingNom[nom[1]]}
                            </div>
                            <div className="col">
                                {this.props.programmes.castingImage[image[2]]}
                                {this.props.programmes.castingNom[nom[2]]}
                            </div>
                            <div className="col">
                                {this.props.programmes.castingImage[image[3]]}
                                {this.props.programmes.castingNom[nom[3]]}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Programme