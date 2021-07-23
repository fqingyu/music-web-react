import { combineReducers } from 'redux-immutable';

// 发现音乐下的reducer
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as rankingReducer} from '../pages/discover/c-pages/ranking/store';

// 播放器reducer
import { reducer as playReducer } from '../pages/player/store';

// 各种详情页reducer
import { reducer as songDetailReducer } from '../pages/song-detail/store';


const cReducer = combineReducers({
    recommend: recommendReducer,
    ranking: rankingReducer,
    player: playReducer,
    songDetail: songDetailReducer
});

export default cReducer;