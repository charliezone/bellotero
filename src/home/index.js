import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchSliders } from "../actions/sliderActions";
import { Container, Row, Col } from 'reactstrap';
import AppCarousel from '../appCarousel';
import './home.scss';


class Home extends Component{
	componentDidMount(){
		this.props.dispatch(fetchSliders());
	}

	render(){
		return(
			<Container className="home">
				<Row>
					<Col>
						<h2>{this.props.title}</h2>
					</Col>
				</Row>
				<Row>
					<Col>
						<AppCarousel items={this.props.sliders} />
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
  sliders: state.sliderReducer.sliders,
  title: state.sliderReducer.title,
  loading: state.sliderReducer.loading,
  error: state.sliderReducer.error
});

Home.propTypes = {
    sliders: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string
}

export default connect(mapStateToProps)(Home);