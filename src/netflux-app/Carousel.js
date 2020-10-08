import React,{Component} from 'react';
import {DataService} from "./DataService"
import { ApiService } from './ApiService';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default class CarouselProg extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        programmes : []
    }
  }
  
  componentDidMount() {
    ApiService.get('programmes').then(response => {
        this.setState({
            programmes: response.data
        })
    })
}

  



  render() {

    return (
      <Carousel
        arrows
      >
        <div>
          <img src={'http://fr.web.img4.acsta.net/r_1280_720/pictures/15/09/29/13/42/151291.jpg'} onClick={this.RedirectTo}/>
        </div>
        
        <img src={'http://fr.web.img6.acsta.net/r_1280_720/pictures/19/12/10/12/41/2871222.jpg'} />
        <img src={'https://image.tmdb.org/t/p/original/r1duFP0GDurX8zGX3nhqjwfrmbK.jpg'} />
      </Carousel>
    );
  }
}
