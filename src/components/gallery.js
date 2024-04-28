import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./gallery.css";
import "react-slideshow-image/dist/styles.css";

class Gallery extends Component{
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
    
    
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
      indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const {slideImages} = this.props;


    return (
      <div className="App">
        
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>

        <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            anterior
          </button>
          <button onClick={this.next} type="button">
            siguiente
          </button>
        </div>
      </div>
    );
  }
}

export default Gallery;
