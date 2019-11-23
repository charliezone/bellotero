import APP_CONFIG from '../../config/config.js';

export function fetchCalculatorData() {
  return (dispatch, getState) => {
    dispatch(fetchCalculatorDataBegin());
    const state = getState();
    /* como es una app que maneja datos estaticos utilice esta comprobación para que dentro de la seccion
    si el usuario vuelve a la misma pagina no tenga que realizar otra petición para obtener los datos,
    sino que lo obtiene directamente del store (no la hubiera utilizado si fuera una app con datos mas dinamicos) */ 
    if (state.calculatorFetchReducer.title.length === 0 && state.calculatorFetchReducer.description.length === 0) {
    	return fetch(`${APP_CONFIG.fetchUrl}page2.json`)
	      .then(handleErrors)
	      .then(res => res.json())
	      .then(json => {
	        dispatch(fetchCalculatorDataSuccess(json));
	        return json;
	      })
	      .catch(error => dispatch(fetchCalculatorDataFailure(error)));
    }   
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_CALCULATOR_DATA_BEGIN   = 'FETCH_CALCULATOR_DATA_BEGIN';
export const FETCH_CALCULATOR_DATA_SUCCESS = 'FETCH_CALCULATOR_DATA_SUCCESS';
export const FETCH_CALCULATOR_DATA_FAILURE = 'FETCH_CALCULATOR_DATA_FAILURE';

export const fetchCalculatorDataBegin = () => ({
  type: FETCH_CALCULATOR_DATA_BEGIN
});

export const fetchCalculatorDataSuccess = item => ({
  type: FETCH_CALCULATOR_DATA_SUCCESS,
  payload: { item }
});

export const fetchCalculatorDataFailure = error => ({
  type: FETCH_CALCULATOR_DATA_FAILURE,
  payload: error
});