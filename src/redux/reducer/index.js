// Importa las action types acá
import {
  GET_ALL_MOVIES,
  GET_MOVIE_DETAILS,
  CREATE_MOVIE,
  DELETE_MOVIE,
  SEND_EMAIL,
} from '../actions';

const initialState = {
  movies: [],
  movieDetail: {},
  email: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return {

      }

    case GET_MOVIE_DETAILS:
      return {

      }

    case CREATE_MOVIE:
      return {

      }
      
    case DELETE_MOVIE:
      return {

      }

    case SEND_EMAIL:
      return {
        
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
