import { CALCULATOR_CALCULATE } from '../actions/calculatorActions';

const initialState = {
  ingredientsValue: null,
  employeesValue: null,
  foodCostSaving: null,
  annualSavings: null
};

export default function calculatorReducer(state = initialState, action){
	if (action.type === CALCULATOR_CALCULATE) {
		return {...state, 
			ingredientsValue: action.payload.item.ingredientsValue,
			employeesValue: action.payload.item.employeesValue,
			foodCostSaving: action.payload.item.foodCostSaving,
			annualSavings: action.payload.item.annualSavings
		};
	}
	return state;
}