import React, { Component } from "react"
import Programme from './Programme'
import { DataService } from './DataService';

class Nouveaute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programmes: DataService.programmes
        }
    }

    render() {
        // let ligne = []
        // for (let i = 0; i < DataService.categories.length; i++) {
        //     this.state.programmes.filter(a => (a.release >= ) && (a.typeFilm.includes(DataService.categories[i]))).map((element) => {
        //         ligne.push(<div className="titreCategory">
        //             {DataService.categories[i]}
        //             <Programme programme={element}></Programme>
        //         </div>)
        //     })
        // }
        return (
            <section className="container">
                <h2 className="text-center">Nouveautés</h2>
                {/* {ligne} */}
            </section>
        )
    }
}

export default Nouveaute