import { APP_CONFIG } from '../config/config.js';

export function fetchSliders() {
  return dispatch => {
    dispatch(fetchSliderBegin());
    return fetch(`${APP_CONFIG.fetchUrl}app.json`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchSliderSuccess(json.slider));
        return json.slider;
      })
      .catch(error => dispatch(fetchSliderFailure(error)));
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

export const fetchSliderSuccess = items => ({
  type: FETCH_SLIDER_SUCCESS,
  payload: { items }
});

export const fetchSliderFailure = error => ({
  type: FETCH_SLIDER_FAILURE,
  payload: { error }
});