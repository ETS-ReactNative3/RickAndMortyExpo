import * as types from "./types";

const initialState = {
  favEpisodes: [{ favoritted: false }],
};

const favoriteEpisodes = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FAVORITE:
      const isFavorited = state.favEpisodes.find(
        (ep) => ep.id === action.payload.id
      );
      if (isFavorited) {
        return { ...state };
      } else {
        return {
          ...state,
          favEpisodes: [...state.favEpisodes, action.payload],
        };
      }

    case types.CHANGE_ICON_FAVORITE:
      const clickFav = favEpisodes.find((ep) => ep.id === action.payload);
      return {
        ...state,
        favoritted: clickFav,
      };

    case types.REMOVE_FAVORITE:
      const remove = state.favEpisodes.filter(
        (ep) => ep.id !== action.payload.id
      );
      return { ...state, favEpisodes: remove };

    default:
      return state;
  }
};

export default favoriteEpisodes;
