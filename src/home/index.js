import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchSliders } from "../actions/sliderActions";
import { Container, Row, Col } from 'reactstrap';


class Home extends Component{
	componentDidMount(){
		this.props.dispatch(fetchSliders());
	}

	render(){
		return(
			<Container>
				<Row>
					<Col>
						<h1>Home</h1>
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

export default connect(mapStateToProps)(Home);