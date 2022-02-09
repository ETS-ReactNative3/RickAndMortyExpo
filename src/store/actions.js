import * as types from "./types";

export const addFavorite = (epInfo) => ({
  type: types.ADD_FAVORITE,
  payload: epInfo,
});

export const removeFavorite = (epInfo) => ({
  type: types.REMOVE_FAVORITE,
  payload: epInfo,
});

export const setFavorite = (id) => ({
  type: types.CHANGE_ICON_FAVORITE,
  payload: id,
});
