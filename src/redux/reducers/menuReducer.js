import {
  FETCH_MENU_BEGIN,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE
} from '../actions/menuActions';

const initialState = {
  menus: [],
  loading: false,
  error: null
};

export default function menuReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_MENU_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_MENU_SUCCESS:
      return {
        ...state,
        loading: false,
        menus: action.payload.item
      };

    case FETCH_MENU_FAILURE:
      return {
        ...state,
        loading: false,
        error: (action.payload.error) ? action.payload.error : "Error generico por que el endpoint no devuelve nada en caso de error",
        menus: []
      };

    default:
      return state;
  }
}