import { combineReducers } from "redux";

import favoriteEpisodes from "./reducers";

const rootReducers = combineReducers({
  favoriteEpisodes,
});

export default rootReducers;
