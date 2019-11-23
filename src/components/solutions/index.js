import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchCalculatorData } from '../../redux/actions/calculatorFetchActions';
import Calculator from '../calculator';
import 'react-input-range/lib/css/index.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:900', 'sans-serif']
  }
});

function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

class Solutions extends Component{
	componentDidMount(){
		this.props.dispatch(fetchCalculatorData());
	}

	render(){
		return(
			<Container className="solutions">
				<Row>
					<Col xs="12" md="4">
						<h2>{truncate(this.props.title, 3)}</h2>
						<h2>{this.props.title.substr(15)}</h2>
						<p>{this.props.description}</p>
					</Col>
					<Col xs="12" md={{size: 6, offset: 2}}>
						<Calculator></Calculator>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
  description: state.calculatorFetchReducer.description,
  title: state.calculatorFetchReducer.title,
  loading: state.calculatorFetchReducer.loading,
  error: state.calculatorFetchReducer.error
});

Solutions.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.string
}

export default connect(mapStateToProps)(Solutions);