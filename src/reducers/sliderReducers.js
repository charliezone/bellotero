import {
  FETCH_SLIDER_BEGIN,
  FETCH_SLIDER_SUCCESS,
  FETCH_SLIDER_FAILURE
} from '../actions/sliderActions';

const initialState = {
  items: [],
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
        items: action.payload.reviews,
        title: action.payload.title
      };

    case FETCH_SLIDER_FAILURE:
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