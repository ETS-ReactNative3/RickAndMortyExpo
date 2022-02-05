import * as types from "./types";

const initialState = {
  episodes: [],
  clickedEpisode: {
    air_date: "",
    characters: "",
    id: "",
    name: "",
    favorite: false,
  },
};

const favoriteEpisodes = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FAVORITE:
      const { epId } = action.payload;

      const epFound = state.episodes.find((item) => item.id === epId);

      const epUpdate = (episode) => {
        if (episode?.favorite) {
          return {
            ...episode,
            favorite: !episode?.favorite,
          };
        } else {
          return {
            ...episode,
            favorite: true,
          };
        }
      };

      const epArraySplitted = state.episodes.filter((item) => item.id !== epId);

      return {
        ...state,
        episodes: [...epArraySplitted, epUpdate(epFound)],
      };

    default:
      return state;
  }
};

export default favoriteEpisodes;
