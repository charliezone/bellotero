import {
  FETCH_SLIDER_BEGIN,
  FETCH_SLIDER_SUCCESS,
  FETCH_SLIDER_FAILURE
} from '../actions/sliderActions';

const initialState = {
  sliders: [],
  title: "",
  loading: false,
  error: null
};

export default function sliderReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SLIDER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_SLIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        sliders: action.payload.item.reviews,
        title: action.payload.item.title
      };

    case FETCH_SLIDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: (action.payload.error) ? action.payload.error : "Error generico por que el endpoint no devuelve nada en caso de error",
        sliders: []
      };

    default:
      return state;
  }
}