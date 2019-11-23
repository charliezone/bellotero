import {
  FETCH_CALCULATOR_DATA_BEGIN,
  FETCH_CALCULATOR_DATA_SUCCESS,
  FETCH_CALCULATOR_DATA_FAILURE,
} from '../actions/calculatorFetchActions';

const initialState = {
  title: '',
  description: '',
  loading: false,
  error: null,
};

export default function calculatorFetchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CALCULATOR_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_CALCULATOR_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        title: action.payload.item.calculator.title,
        description: action.payload.item.calculator.description,
      };

    case FETCH_CALCULATOR_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: (action.payload.error) ? action.payload.error : 'Error generico por que el endpoint no devuelve nada en caso de error',
        title: '',
        description: '',
      };

    default:
      return state;
  }
}
