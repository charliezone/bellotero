import APP_CONFIG from '../../config/config';

export function fetchMenus() {
  return (dispatch, getState) => {
    dispatch(fetchMenusBegin());
    const state = getState();
    /* como es una app que maneja datos estaticos utilice esta comprobación para que dentro de la seccion
    si el usuario vuelve a la misma pagina no tenga que realizar otra petición para obtener los datos,
    sino que lo obtiene directamente del store (no la hubiera utilizado si fuera una app con datos mas dinamicos) */ 
    if (state.sliderReducer.title.length === 0 && state.sliderReducer.sliders.length === 0){
    	return fetch(`${APP_CONFIG.fetchUrl}app.json`)
	      .then(handleErrors)
	      .then(res => res.json())
	      .then(json => {
	        dispatch(fetchMenusSuccess(json.menu.items));
	        return json.menu.items;
	      })
	      .catch(error => dispatch(fetchMenusFailure(error)));
    }
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

export const fetchMenusSuccess = item => ({
  type: FETCH_MENU_SUCCESS,
  payload: { item }
});

export const fetchMenusFailure = error => ({
  type: FETCH_MENU_FAILURE,
  payload: error 
});