import {
  FETCH_MENU_BEGIN,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE
} from '../actions/menuActions';

const initialState = {
  items: [],
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
        items: action.payload.items
      };

    case FETCH_MENU_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}