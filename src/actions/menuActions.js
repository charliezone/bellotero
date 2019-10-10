import { APP_CONFIG } from '../config/config.js';

export function fetchMenus() {
  return dispatch => {
    dispatch(fetchMenusBegin());
    return fetch(`${APP_CONFIG.fetchUrl}app.json`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchMenusSuccess(json.menu.items));
        return json.menu.items;
      })
      .catch(error => dispatch(fetchMenusFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_MENU_BEGIN   = 'FETCH_MENU_BEGIN';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU_FAILURE';

export const fetchMenusBegin = () => ({
  type: FETCH_MENU_BEGIN
});

export const fetchMenusSuccess = items => ({
  type: FETCH_MENU_SUCCESS,
  payload: { items }
});

export const fetchMenusFailure = error => ({
  type: FETCH_MENU_FAILURE,
  payload: { error }
});