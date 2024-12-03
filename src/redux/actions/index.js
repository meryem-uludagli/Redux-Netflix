import api from "../../api";
import ActionTypes from "../reducers/actionTypes";

export const getWatchList = () => (dispatch) => {
  dispatch({ type: ActionTypes.LIST_LOADING });

  api
    .get(`/account/21550989/watchlist/movies?language=tr`)
    .then((res) =>
      dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
    );
};

export const toggleList = (movie, isAdd) => (dispatch) => {
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };

  api
    .post(`/account/21550989/watchlist`, body)
    .then(() => {
      isAdd
        ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
        : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie });
    })
    .catch((err) => console.log(err));
};
