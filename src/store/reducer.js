import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as playReducer } from '../pages/player/store';
import { reducer as songDetailReducer } from '../pages/song-detail/store';

const cReducer = combineReducers({
    recommend: recommendReducer,
    player: playReducer,
    songDetail: songDetailReducer
});

export default cReducer;