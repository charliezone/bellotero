import React, { Component } from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import {
  Carousel,
  CarouselItem
} from 'reactstrap';
import WebFont from 'webfontloader';
import rightArrow from '../assets/img/arrow-right-white.svg';
import './appCarousel.scss';
WebFont.load({
  google: {
    families: ['Cormorant+Garamond:600i', 'sans-serif', 'Roboto:700']
  }
});

class AppCarousel extends Component{
 constructor(props){
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next(){
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous(){
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex){
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render(){
    const { activeIndex } = this.state;

    const slides = this.props.items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={uniqid()}
        >
        <div className="carouselItemContent">
          <div className="person">
            <h3>{item.name}</h3>
            <h4>{item.position}</h4>
          </div> 
          <p>{`"${item.comment}"`}</p>
        </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className="appCarousel"
      >
        {slides}
        <div className="controls"><span className="indicators">{activeIndex+1}&frasl;<sub>{this.props.items.length}</sub></span><button style={{backgroundImage: `url(${rightArrow})`}} onClick={this.previous}></button><button style={{backgroundImage: `url(${rightArrow})`}} onClick={this.next}></button></div>
      </Carousel>
    );
  }
}

AppCarousel.propTypes = {
    items: PropTypes.array
}

export default AppCarousel;