import * as types from "./types";

export const addFavorite = (epId) => ({
  type: types.ADD_FAVORITE,
  payload: { epId },
});
