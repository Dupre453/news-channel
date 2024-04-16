//все редьюсеры здесь

import {combineReducers} from "redux";
import {postsReducer} from "./ducks/posts/reducer";
import {tagsReducer} from "./actualTags/reducer";

export const rootReducer = combineReducers({
 posts: postsReducer,
 tags: tagsReducer
})