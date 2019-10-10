import { APP_CONFIG } from '../config/config.js';

export function fetchSliders() {
  return (dispatch, getState) => {
    dispatch(fetchSliderBegin());
    const state = getState();
    /* como es una app que maneja datos estaticos utilice esta comprobación para que dentro de la seccion
    si el usuario vuelve a la misma pagina no tenga que realizar otra petición para obtener los datos,
    sino que lo obtiene directamente del store (no la hubiera utilizado si fuera una app con datos mas dinamicos) */ 
    if (state.sliderReducer.title.length === 0 && state.sliderReducer.sliders.length === 0) {
    	return fetch(`${APP_CONFIG.fetchUrl}page1.json`)
	      .then(handleErrors)
	      .then(res => res.json())
	      .then(json => {
	        dispatch(fetchSliderSuccess(json.slider));
	        return json.slider;
	      })
	      .catch(error => dispatch(fetchSliderFailure(error)));
    }   
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_SLIDER_BEGIN   = 'FETCH_SLIDER_BEGIN';
export const FETCH_SLIDER_SUCCESS = 'FETCH_SLIDER_SUCCESS';
export const FETCH_SLIDER_FAILURE = 'FETCH_SLIDER_FAILURE';

export const fetchSliderBegin = () => ({
  type: FETCH_SLIDER_BEGIN
});

export const fetchSliderSuccess = item => ({
  type: FETCH_SLIDER_SUCCESS,
  payload: { item }
});

export const fetchSliderFailure = error => ({
  type: FETCH_SLIDER_FAILURE,
  payload: error
});