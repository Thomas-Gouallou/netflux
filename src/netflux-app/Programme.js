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
                        image
                    </div>
                    <div className="col">
                        <div className="row">
                            Titre :
                        </div>
                        <div className="row">
                            Ratings :
                        </div>
                        <div className="row">
                            Durée :
                        </div>
                        <div className="row">
                            Date de sortie :
                        </div>
                        <div className="row">
                            Description :
                        </div>
                        <div className="row">
                            Genre :
                        </div>
                        <div className="row">
                            Casting :
                            <div className="col">
                                1ere image
                            </div>
                            <div className="col">
                                2eme image
                            </div>
                            <div className="col">
                                3eme image
                            </div>
                            <div className="col">
                                4eme image
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Programme