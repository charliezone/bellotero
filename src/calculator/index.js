import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { calculatorCalculate } from "../actions/calculatorActions";
import InputRange from 'react-input-range';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import WebFont from 'webfontloader';
import './calculator.scss';

WebFont.load({
  google: {
    families: ['Roboto:bold,500', 'sans-serif']
  }
});

class Calculator extends Component{
	constructor(props){
		super(props);
		this.state = {
	      ingredientsValue: (this.props.ingredientsValue) ? this.props.ingredientsValue : 10,
	      employeesValue: (this.props.employeesValue) ? this.props.employeesValue : 1,
	      foodCostSaving: (this.props.ingredientsValue) ? this.props.ingredientsValue * 0.3 : 10 * 0.3,
	      annualSavings: (this.props.employeesValue) ? (this.props.employeesValue * 1337) + (this.props.ingredientsValue * 0.3) : 1337 + 3
	    };
	}

	calculateSaving = (ingredientsValue = this.state.ingredientsValue, employeesValue = this.state.employeesValue) => {
		const foodCostSaving = ingredientsValue * 0.3;
		const annualSavings = (employeesValue * 1337) + foodCostSaving;
		this.setState({
			ingredientsValue: ingredientsValue,
			employeesValue: employeesValue,
			foodCostSaving: foodCostSaving,
			annualSavings: annualSavings
		});
		this.props.calculate(this.state);
	}

	render(){
		return (
			<div className="calculator">
				<div className="feature">
					<label>Monthly<br/>ingredient spending</label>
					<InputGroup>
			        	<InputGroupAddon addonType="prepend">$</InputGroupAddon>
			        	<Input readOnly value={this.state.ingredientsValue} />
			      	</InputGroup>
					<InputRange
						step={1}
						maxValue={100}
						minValue={10}
				        value={this.state.ingredientsValue}
				        onChange={ingredientsValue => this.calculateSaving(ingredientsValue)} />
				</div>
				<div className="feature employees">
					<label>Full-time employees that<br/>process invoices</label>
					<Input readOnly value={this.state.employeesValue} />
					<InputRange
						step={1}
						maxValue={10}
						minValue={1}
				        value={this.state.employeesValue}
				        onChange={employeesValue => this.calculateSaving(undefined, employeesValue)} />
				</div>
				<div className="results">
					<InputGroup>
			        	<InputGroupAddon addonType="prepend">$</InputGroupAddon>
			        	<Input readOnly value={Number(this.state.foodCostSaving).toFixed(2)} />
			      	</InputGroup>
					<label>Estimated cost food savings</label>
					<InputGroup>
			        	<InputGroupAddon addonType="prepend">$</InputGroupAddon>
			        	<Input readOnly value={Number(this.state.annualSavings).toFixed(2)} />
			      	</InputGroup>
					<label>Your estimated annual savings</label>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  ingredientsValue: state.calculatorReducer.ingredientsValue,
  employeesValue: state.calculatorReducer.employeesValue,
  foodCostSaving: state.calculatorReducer.foodCostSaving,
  annualSavings: state.calculatorReducer.annualSavings
});

function mapDispatchToProps(dispatch){
	return {
		calculate: item => dispatch(calculatorCalculate(item))
	};
}

Calculator.propTypes = {
    ingredientsValue: PropTypes.number,
    employeesValue: PropTypes.number,
    foodCostSaving: PropTypes.number,
    annualSavings: PropTypes.number,
    calculate: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);